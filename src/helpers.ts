export const getSeconds = () => new Date().getSeconds();

export const requestAnimationFrame = (fn: () => void) =>
  window.requestAnimationFrame(fn);
