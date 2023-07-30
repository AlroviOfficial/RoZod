type CacheEntry<T> = {
  value: T;
  expiresAt?: number;
};

interface CacheStore<T> {
  get(key: string): Promise<CacheEntry<T> | null>;
  set(key: string, value: CacheEntry<T>): Promise<void>;
  delete(key: string): Promise<void>;
  clear(): Promise<void>;
}

class MemoryStore<T> implements CacheStore<T> {
  private store: Record<string, CacheEntry<T>> = {};

  async get(key: string): Promise<CacheEntry<T> | null> {
    return this.store[key] || null;
  }

  async set(key: string, value: CacheEntry<T>): Promise<void> {
    this.store[key] = value;
  }

  async delete(key: string): Promise<void> {
    delete this.store[key];
  }

  async clear(): Promise<void> {
    this.store = {};
  }
}

class LocalStorageStore<T> implements CacheStore<T> {
  async get(key: string): Promise<CacheEntry<T> | null> {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  async set(key: string, value: CacheEntry<T>): Promise<void> {
    localStorage.setItem(key, JSON.stringify(value));
  }

  async delete(key: string): Promise<void> {
    localStorage.removeItem(key);
  }

  async clear(): Promise<void> {
    localStorage.clear();
  }
}

class ChromeStore<T> implements CacheStore<T> {
  async get(key: string): Promise<CacheEntry<T> | null> {
    return new Promise(resolve => {
      // @ts-ignore
      chrome.storage.local.get(key, result => {
        resolve(result[key]);
      });
    });
  }

  async set(key: string, value: CacheEntry<T>): Promise<void> {
    return new Promise(resolve => {
      let item: { [key: string]: any } = {};
      item[key] = value;
      // @ts-ignore
      chrome.storage.local.set(item, resolve);
    });
  }

  async delete(key: string): Promise<void> {
    return new Promise(resolve => {
      // @ts-ignore
      chrome.storage.local.remove(key, resolve);
    });
  }

  async clear(): Promise<void> {
    return new Promise(resolve => {
      // @ts-ignore
      chrome.storage.local.clear(resolve);
    });
  }
}

class Cache<T> {
  private store: CacheStore<T>;

  constructor(store: CacheStore<T>) {
    this.store = store;
  }

  async get(key: string): Promise<T | null> {
    const entry = await this.store.get(key);
    if (!entry) {
      return null;
    }
    if (entry.expiresAt && entry.expiresAt < Date.now()) {
      await this.delete(key);
      return null;
    }
    return entry.value;
  }

  async set(key: string, value: T, ttl?: number): Promise<void> {
    await this.store.set(key, {
      value,
      expiresAt: ttl ? Date.now() + ttl : undefined,
    });
  }

  async delete(key: string): Promise<void> {
    await this.store.delete(key);
  }

  async clear(): Promise<void> {
    await this.store.clear();
  }
}

export const cache = new Cache(new MemoryStore());
export const localStorageCache = new Cache(new LocalStorageStore());
export const chromeStorageCache = new Cache(new ChromeStore());