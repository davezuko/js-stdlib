import _curry2 from './internal/_curry2'

var zipObj = _curry2(function zipObj (keys, vals) {
  var i   = 0
    , len = Math.min(keys.length, vals.length)
    , res = {}

  for (; i < len; i++) {
    res[keys[i]] = vals[i]
  }
  return res
})

export default zipObj