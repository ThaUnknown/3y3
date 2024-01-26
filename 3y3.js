export const encode = (/** @type {string} */ text) => {
  let output = ''
  for (const char of text) {
    const c = char.codePointAt(0) ?? 0
    output += String.fromCodePoint(c + (c > 0x00 && c < 0x7f ? 0xe0000 : 0))
  }

  return output
}

export const decode = (/** @type {string} */ text) => {
  let output = ''
  for (const char of text) {
    const c = char.codePointAt(0) ?? 0
    output += String.fromCodePoint(c - (c > 0xe0000 && c < 0xe007f ? 0xe0000 : 0))
  }

  return output
}

export const detect = (/** @type {string} */ text) => {
  for (const char of text) {
    const c = char.codePointAt(0) ?? 0
    if (c > 0xe0000 && c < 0xe007f) return true
  }
  return false
}
