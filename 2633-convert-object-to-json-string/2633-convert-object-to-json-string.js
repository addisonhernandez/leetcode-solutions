/**
 * @param {any} object
 * @return {string}
 */
var jsonStringify = function (object) {
  switch (typeof object) {
    case 'boolean':
    case 'number': {
      return object.toString();
    }
    case 'string': {
      return `"${object}"`;
    }
    case 'object': {
      if (object === null) {
        return 'null';
      }
      if (Array.isArray(object)) {
        return `[${object.map(jsonStringify).join(',')}]`;
      }
      return `{${Object.keys(object)
        .map((key) => `"${key}":${jsonStringify(object[key])}`)
        .join(',')}}`;
    }
    default:
      return '';
  }
};
