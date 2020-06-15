import { subtract } from './utils/array';

export const longestSubarrayLength = (arr: number[], k: number): number => {
  const sortedArr = [...arr].sort(subtract),
    sortedArrLength = sortedArr.length;

  let longestPossibleLength = 0,
    accumValue = 0,
    sortedArrIndex = 0;

  if (sortedArrLength > 0) {
    longestPossibleLength = 1;
    accumValue = sortedArr[sortedArrIndex];
  }

  for (sortedArrIndex = 1; sortedArrIndex < sortedArrLength; ++sortedArrIndex) {
    accumValue += sortedArr[sortedArrIndex];

    if (accumValue > k) {
      break;
    }

    ++longestPossibleLength;
  }

  return longestPossibleLength;
};
