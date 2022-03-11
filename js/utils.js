/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}
export const getRandomArrayElement = (elements) => elements [getRandomPositiveInteger(0, elements.length - 1)];
