// Inspired by
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators
export function range(start = 0, end = Infinity, step = 1): Iterable<number> {
  return {
    [Symbol.iterator]() {
      let nextIndex = start;
      let iterationCount = 0;

      return {
        next: function () {
          if (step === 0) {
            return { value: iterationCount, done: true };
          }

          if (nextIndex <= end) {
            let result = { value: nextIndex, done: false };
            nextIndex += step;
            iterationCount++;
            return result;
          }
          return { value: iterationCount, done: true };
        },
      };
    },
  };
}
