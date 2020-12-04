import { DateHelper } from './date-helper';

describe('testing Date Helper', () => {
  describe('equal(date1: Date, date2: Date) function', () => {
    describe('happy path', () => {
      it('should be true when both dates are equal', () => {
        const result = DateHelper.equal(new Date(), new Date());
        expect(result).toBe(true);
      });
    });
    describe('sad path', () => {
      it('should be false when dates are different', () => {
        const result = DateHelper.equal(
          new Date(),
          new Date('2020-11-23T00:00:00Z'),
        );
        expect(result).toBe(false);
      });
    });
  });
});
