/**
 * @param {any} object
 * @return {string}
 */
var jsonStringify = function (object) {
  if (object === null) {
    return 'null';
  }

  if (typeof object === 'string') {
    return `"${object}"`;
  }

  if (typeof object === 'number' || typeof object === 'boolean') {
    return object.toString();
  }

  if (Array.isArray(object)) {
    return `[${object.map(jsonStringify).join(',')}]`;
  }

  return `{${Object.keys(object)
    .map((key) => `"${key}":${jsonStringify(object[key])}`)
    .join(',')}}`;
};
