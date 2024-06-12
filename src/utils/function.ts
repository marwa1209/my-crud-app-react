/**
 * Slices the input text if its length exceeds a specified maximum length.
 *
 * @format
 * @param {string} txt - The input text to process.
 * @param {number} [max=50] - The maximum length of the text. Default is 50.
 * @returns {string} - The processed text, sliced if necessary.
 */

export function textSlicer(txt: string, max: number = 50) {
  if (txt.length >= max) return `${txt.slice(0, max)}....`;
  return txt;
}
