import { longestSubarrayLength } from '../index';

describe('[index] Unit Tets', () => {
  it('Should produce a subarray length of 3 given input [3, 2, 1, 1] with k value of 4', () => {
    const length = longestSubarrayLength([3, 2, 1, 1], 4);

    expect(length).toBeNumber();
    expect(length).toStrictEqual(3);
  });

  it('Should produce a subarray length of 2 given input [1, 2, 3] with k value of 3', () => {
    const length = longestSubarrayLength([1, 2, 3], 3);

    expect(length).toBeNumber();
    expect(length).toStrictEqual(2);
  });

  it('Should produce a subarray length of 0 given input [] with k value of 3', () => {
    const length = longestSubarrayLength([], 3);

    expect(length).toBeNumber();
    expect(length).toStrictEqual(0);
  });

  it('Should produce a subarray length of 0 given input [1, 2, 3, 4] with k value of 4', () => {
    const length = longestSubarrayLength([1, 2, 3, 4], 20);

    expect(length).toBeNumber();
    expect(length).toStrictEqual(4);
  });
});
