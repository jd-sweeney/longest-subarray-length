import { subtract } from '../array';

describe('[utils/array] Unit Tests', () => {
  describe('[subtract]', () => {
    it('Should subtract the two values 1 and 1 together to produce 0', () => {
      const value = subtract(1, 1);

      expect(value).toBeNumber();
      expect(value).toStrictEqual(0);
    });

    it('Should subtract the two values 4 and 5 together to produce 2', () => {
      const value = subtract(4, 5);

      expect(value).toBeNumber();
      expect(value).toStrictEqual(-1);
    });

    it('Should subtract the two values -4 and 5 together to produce 2', () => {
      const value = subtract(-4, 5);

      expect(value).toBeNumber();
      expect(value).toStrictEqual(-9);
    });
  });
});
