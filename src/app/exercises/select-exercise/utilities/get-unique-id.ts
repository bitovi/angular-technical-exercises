let uniqueIdCounter = 0;

/**
 * Creates a unique string that increments at each use.
 */
export const getUniqueId = (): string => {
  uniqueIdCounter++;
  return `unique-id-${uniqueIdCounter}`;
};
