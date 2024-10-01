import { symmetricDifference } from "../src/symmetricDifference";
// import {describe, expect, test} from '@jest/globals';



test('two identical arrays returns empty array', () => {
    expect(symmetricDifference([1], [1])).toEqual([]);
  });

  test('two arrays return symm diff', () => {
    expect(symmetricDifference([1, 2], [1])).toEqual([2]);
  });

  test('two different arrays input', () => {
    expect(symmetricDifference([1, 2, 3], [4])).toEqual([1, 2, 3, 4]);
  });

  test('two arrays input', () => {
    expect(symmetricDifference([1, 2, 3], [1, 2, 4])).toEqual([ 3, 4]);
  });

  test('three arrays returns sym diff', () => {
    expect(symmetricDifference([1, 2, 3], [4], [1, 2, 5])).toEqual([3, 4, 5]);
  });

  test('three arrays returns correct sym diff', () => {
    expect(symmetricDifference([1, 2, 3], [1, 2, 3], [1, 2, 3])).toEqual([1, 2, 3]);
  });

  test('three arrays returns correct sym diff when are there duplicates in one of the arrays', () => {
    expect(symmetricDifference([1, 2, 2, 3], [1, 2, 3], [1, 2, 3])).toEqual([1, 2, 3]);
  });

  test('three arrays returns correct sym diff when are there duplicates in one of the arrays', () => {
    expect(symmetricDifference([1, 2, 2, 3], [1, 2, 3], [1, 2, 2, 3, 3, 4])).toEqual([1, 2, 3, 4]);
  });