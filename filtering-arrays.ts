/**
 * Type guard
 */
const isDefined = <T>(item: T | undefined): item is T => {
  if (item === undefined) return false;
  if (item === null) return false;
  return true;
};

const someArray = ["this", "is", undefined, "array"];

const mappedArray = someArray.filter(isDefined);

// Function to filter in a type-safe fashion
function typeFilter<T, R extends T>(
  array: T[],
  filterFunction: (element: T) => element is R
): R[] {
  const result: R[] = [];
  array.forEach((e) => {
    if (filterFunction(e)) result.push(e);
  });
  return result;
}

const array = typeFilter(
  ["this", "is", "cool", undefined, 1],
  (element: string | number | undefined): element is string => {
    return true;
  }
);
