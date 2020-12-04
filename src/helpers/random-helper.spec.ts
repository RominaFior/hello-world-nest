import { RandomHelper } from './random-helper';

describe('testing Random Helper', () => {
  describe('getRandomArbitrary(min, max) function', () => {
    describe('happy path', () => {
      it('should return a random number between 2 parameters', () => {
        const result = RandomHelper.getRandomArbitrary(1, 3);
        expect(result).toBeGreaterThanOrEqual(1);
        expect(result).toBeLessThan(3);
      });
    });
    describe('sad path', () => {
      it('should return 0 when parameters are null', () => {
        const result = RandomHelper.getRandomArbitrary(null, null);
        expect(result).toEqual(0);
      });
      it('should return NaN when parameters are undefined', () => {
        const result = RandomHelper.getRandomArbitrary(undefined, undefined);
        expect(result).toEqual(NaN);
      });
    });
  });
  describe('getRandomDate function', () => {
    it('should return a random date', () => {
      const result = RandomHelper.getRandomDate();
      const year = result.split('y');
      const month = year[1].split('m');
      const day = month[1].split('d');
      expect(parseInt(year[0])).toBeGreaterThanOrEqual(1);
      expect(parseInt(year[0])).toBeLessThanOrEqual(50);
      expect(parseInt(month[0])).toBeGreaterThanOrEqual(1);
      expect(parseInt(month[0])).toBeLessThanOrEqual(12);
      expect(parseInt(day[0])).toBeGreaterThanOrEqual(1);
      expect(parseInt(day[0])).toBeLessThanOrEqual(31);
    });
  });
});
