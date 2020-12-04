import { ArrayHelper } from './array-helper';

describe('testing array helpers', () => {
  describe('containsAllElements function', () => {
    describe('happy path', () => {
      it('should return true when both parameters contains the same elements', () => {
        const sample = ['ALL_BU'];
        const target = ['ALL_BU'];
        expect(ArrayHelper.containsAllElements(sample, target)).toBeTruthy();
      });
    });
    describe('sad path', () => {
      it('should return false given a non-matching array of elements', () => {
        const sample = ['ALL_BU'];
        const target = ['CARE_MANAGER'];
        expect(ArrayHelper.containsAllElements(sample, target)).toBeFalsy();
      });
    });
  });
  describe('isEmpty(target) function', () => {
    describe('happy path', () => {
      it('should return true given a non-empty array', () => {
        const target = ['ALL_BU'];
        expect(ArrayHelper.isEmpty(target)).toBeTruthy();
      });
    });
    describe('sad path', () => {
      it('should return false when parameter is empty', () => {
        const target = [];
        expect(ArrayHelper.isEmpty(target)).toBeFalsy();
      });
    });
  });
});
