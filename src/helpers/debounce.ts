export const debounce = (fn: any, ms: number) => {
  let isReady = true;

  return function (...args: any[]) {
    if (!isReady) return;
    fn();
    isReady = false;

    setTimeout(() => {
      isReady = true;
    }, ms);
  };
};
