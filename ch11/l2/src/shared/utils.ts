function firstOrNull<T>(array: T[]): T | null {
  return array.length === 0 ? null : array[0];
}
