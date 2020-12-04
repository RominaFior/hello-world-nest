import { FilterHelper } from './filter-helper';
import * as FilterHelperMocks from '../mock/filter-helpers-mocks';

describe('testing Filter Helper', () => {
  describe('filter function(collection, objectFilter, customMatcher = {}, customCondition = (el) => true, sortingObj?) ', () => {
    describe('happy path', () => {
      it('should return the collection filtered succesfully', () => {
        const result = FilterHelper.filter(
          FilterHelperMocks.original.members,
          FilterHelperMocks.successFilter,
          {
            fullName: (left: string, right: string) =>
              left.toLowerCase().includes(right.toLowerCase()),
          },
          (el) => true,
          {
            field: 'dateOfBirth',
            direction: FilterHelperMocks.successFilter['sort'],
            isDate: true,
          }
        );
        expect(result).toEqual(FilterHelperMocks.filterResponse);
      });
      it('should return the collection filtered succesfully with array filter', () => {
        const result = FilterHelper.filter(
          FilterHelperMocks.original.members,
          FilterHelperMocks.succesArrayFilters,
          {
            fullName: (left: string, right: string) =>
              left.toLowerCase().includes(right.toLowerCase()),
          },
          (el) => true,
          {
            field: 'dateOfBirth',
            direction: FilterHelperMocks.succesArrayFilters['sort'],
            isDate: true,
          }
        );
        expect(result).toEqual(FilterHelperMocks.filterArrayResponse);
      });
    });
    describe('sad path', () => {
      it('should return an empty collection whit wrong filter', () => {
        const result = FilterHelper.filter(
          FilterHelperMocks.original.members,
          FilterHelperMocks.failFilter,
          {
            fullName: (left: string, right: string) =>
              left.toLowerCase().includes(right.toLowerCase()),
          },
          (el) => true,
          {
            field: 'dateOfBirth',
            direction: FilterHelperMocks.failFilter['sort'],
            isDate: true,
          }
        );
        expect(result).toEqual(FilterHelperMocks.emptyResult);
      });
      it('should return an empty collection whit wrong filter array', () => {
        const result = FilterHelper.filter(
          FilterHelperMocks.original.members,
          FilterHelperMocks.failArrayFilters,
          {
            fullName: (left: string, right: string) =>
              left.toLowerCase().includes(right.toLowerCase()),
          },
          (el) => true,
          {
            field: 'dateOfBirth',
            direction: FilterHelperMocks.failArrayFilters['sort'],
            isDate: true,
          }
        );
        expect(result).toEqual(FilterHelperMocks.emptyResult);
      });
    });
  });
});
