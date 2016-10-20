import _curry2 from './internal/_curry2'

/**
 * @name isType
 * @signature (String | Function) -> Boolean
 * @since v0.13.0
 */
export default _curry2(function isType (type, a) {
  if (a == null) return false

  return typeof type === 'string'
    ? typeof a === type
    : a instanceof type || a.constructor === type
})