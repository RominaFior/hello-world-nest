export class FilterHelper {
  static filter(
    collection,
    objectFilter,
    customMatcher = {},
    customCondition = (el) => true,
    sortingObj?
  ) {
    var result = collection.filter((el) => {
      var match = FilterHelper.applyMatch(el, objectFilter, customMatcher);
      match = match && customCondition(el);
      return match;
    });
    if (sortingObj && sortingObj.direction) {
      result = result.sort(FilterHelper.getSortingFunction(sortingObj));
    }
    return result;
  }

  private static applyMatch(object, objectFilter, matcher) {
    var filterKeys = Object.keys(objectFilter).filter(
      (k) => objectFilter[k] != null && object[k] !== undefined
    );
    var match = true;
    filterKeys.forEach((key) => {
      if (Array.isArray(objectFilter[key])) {
        var matcharray = false;
        for (let index = 0; index < objectFilter[key].length; index++) {
          matcharray =
            matcharray ||
            (matcher[key]
              ? matcher[key](object[key], objectFilter[key][index])
              : object[key] == objectFilter[key][index]);
        }
        match = match && matcharray;
      } else {
        match =
          match &&
          (matcher[key]
            ? matcher[key](object[key], objectFilter[key])
            : object[key] == objectFilter[key]);
      }
    });

    return match;
  }

  private static getSortingFunction(sortingObj) {
    if (sortingObj.isDate) {
      if (sortingObj.direction == 'DESC') {
        return (l, r) =>
          new Date(l[sortingObj.field]) > new Date(r[sortingObj.field])
            ? -1
            : 1;
      } else if (sortingObj.direction == 'ASC') {
        return (l, r) =>
          new Date(r[sortingObj.field]) > new Date(l[sortingObj.field])
            ? -1
            : 1;
      }
    }
  }
}
