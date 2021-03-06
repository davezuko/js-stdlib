/**
 * @name fromPairs
 * @category Collection
 * @since v0.7.0
 * @description
 * Builds an object out of a list of `[key, value]` tuples. If you have two separate
 * lists rather than a 2D list, you can use [zipObj](#zipObj).
 * @see toPairs
 * @see zipObj
 *
 * @example
 * fromPairs([['a', 1], ['b', 2]])           // => { a: 1, b: 2 }
 * fromPairs([['a', 1], ['b', 2], ['a', 3]]) // => { a: 3, b: 2 }
 */
export default function fromPairs (pairs) {
  var i   = 0
    , acc = {}

  for (; i < pairs.length; i++) {
    acc[pairs[i][0]] = pairs[i][1]
  }

  return acc
}
