import { pairwise } from "../src/pairwise";

describe('pairwise', () => {
    // afterEach(() => {
    //   jest.restoreAllMocks();
    // });
    test('returns zero when input is empty', async () => {
        
        expect(pairwise([], 0)).toEqual(0);
      });

      test('find the pairs that add to ', async () => {
        
        expect(pairwise([1,1], 2)).toEqual(1);
      });

      test('find the pairs that add to ', async () => {
        
        expect(pairwise([1, 4, 2, 3, 0, 5], 7)).toEqual(11);
      });
     
      test('find the pairs that add to ', async () => {
        
        expect(pairwise([1, 3, 2, 4], 4)).toEqual(1);
      });
      test('find the pairs that add to ', async () => {
        
        expect(pairwise([0, 0, 0, 0, 1, 1], 1)).toEqual(10);
      });

    });
  