function isString(value) {
  if (typeof value === 'string' || value instanceof String) return true

  return false
}

module.exports = isString