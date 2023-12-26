type CacheEntry<T> = {
  value: T;
  expiresAt?: number;
};

interface CacheStore<T> {
  get(key: string): Promise<CacheEntry<T> | null>;
  set(key: string, value: CacheEntry<T>): Promise<void>;
  all(): Promise<Record<string, CacheEntry<T>>>;
  delete(key: string): Promise<void>;
}

export class MemoryStore<T> implements CacheStore<T> {
  private store: Record<string, CacheEntry<T>> = {};

  async get(key: string): Promise<CacheEntry<T> | null> {
    return this.store[key];
  }

  async set(key: string, value: CacheEntry<T>): Promise<void> {
    this.store[key] = value;
  }

  async all(): Promise<Record<string, CacheEntry<T>>> {
    return this.store;
  }

  async delete(key: string): Promise<void> {
    delete this.store[key];
  }
}

export class LocalStorageStore<T> implements CacheStore<T> {
  async get(key: string): Promise<CacheEntry<T> | null> {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  async set(key: string, value: CacheEntry<T>): Promise<void> {
    localStorage.setItem(key, JSON.stringify(value));
  }

  async all(): Promise<Record<string, CacheEntry<T>>> {
    if (!globalThis.localStorage) return {};
    const keys = Object.keys(localStorage);
    const entries: Record<string, CacheEntry<T>> = {};
    keys.forEach((key) => {
      if (!key.startsWith('rozod_cache:')) return;
      const value = localStorage.getItem(key);
      if (value) {
        entries[key] = JSON.parse(value);
      }
    });
    return entries;
  }

  async delete(key: string): Promise<void> {
    localStorage.removeItem(key);
  }
}

export class ChromeStore<T> implements CacheStore<T> {
  async get(key: string): Promise<CacheEntry<T> | null> {
    return new Promise((resolve) => {
      // @ts-ignore
      chrome.storage.local.get(key, (result) => {
        resolve(result[key]);
      });
    });
  }

  async set(key: string, value: CacheEntry<T>): Promise<void> {
    return new Promise((resolve) => {
      let item: { [key: string]: any } = {};
      item[key] = value;
      // @ts-ignore
      chrome.storage.local.set(item, resolve);
    });
  }

  async all(): Promise<Record<string, CacheEntry<T>>> {
    if (!(globalThis as typeof globalThis & { chrome: any }).chrome) return {};
    return new Promise((resolve) => {
      // @ts-ignore
      chrome?.storage?.local?.get?.(null, (result) => {
        resolve(result?.filter?.((key: string) => key.startsWith('rozod_cache:')));
      });
    });
  }

  async delete(key: string): Promise<void> {
    return new Promise((resolve) => {
      // @ts-ignore
      chrome.storage.local.remove(key, resolve);
    });
  }
}

export class Cache<T> {
  private store: CacheStore<T>;
  private didCheckExpired = false;

  constructor(store: CacheStore<T>) {
    this.store = store;
    this.checkExpired().catch();
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

  private async checkExpired(): Promise<void> {
    if (this.didCheckExpired) return;
    this.didCheckExpired = true;
    const entries = await this.store.all();
    Object.keys(entries).forEach(async (key) => {
      const entry = entries[key];
      if (entry.expiresAt && entry.expiresAt < Date.now()) {
        await this.delete(key);
      }
    });
  }
}
