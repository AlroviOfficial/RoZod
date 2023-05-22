type CacheEntry<T> = {
	value: T;
	expiresAt?: number;
};

class Cache<T> {
	private cache: Record<string, CacheEntry<T>> = {};

	get(key: string): T | null {
		const entry = this.cache[key];
		if (!entry) {
			return null;
		}
		if (entry.expiresAt && entry.expiresAt < Date.now()) {
			delete this.cache[key];
			return null;
		}
		return entry.value;
	}

	set(key: string, value: T, ttl?: number): void {
		this.cache[key] = {
			value,
			expiresAt: ttl ? Date.now() + ttl : undefined,
		};
	}

	delete(key: string): void {
		delete this.cache[key];
	}

	clear(): void {
		this.cache = {};
	}
}

export const cache = new Cache<any>();