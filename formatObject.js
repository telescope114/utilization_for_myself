const formatObject = (obj, index = 0) => {
  let out = ''
  let space = ''
  for (let i = 0; i < index + 2; i ++) { space += ' ' }
  if (Array.isArray(obj)) {
    out += '[\n'
    obj.forEach((item, i) => {
      let fff = space
      if (typeof item === 'object' && item !== undefined) {
        fff += `${formatObject(item, index + 2)}`
      } else if (typeof item === 'string') {
        fff += `'${item}',\n`
      } else {
        console.log(item)
        fff += `${item.toString()},\n`
      }
      out += fff
    })
    if (index === 0) {
      out += space.substring(2) + ']'
    } else {
      out += space.substring(2) + '],\n'
    }
  } else if (typeof obj === 'object') {
    out += '{\n'
    const keyList = Object.keys(obj)
    keyList.forEach((item, i) => {
      let fff = space
      if (typeof obj[item] === 'object' && obj[item] !== undefined) {
        fff += `${item}: ${formatObject(obj[item], index + 2)}`
      } else if (typeof obj[item] === 'string') {
        fff += `${item}: '${obj[item]}',\n`
      } else {
        fff += `${item}: ${obj[item].toString()},\n`
      }
      out += fff
    })
    if (index === 0) {
      out += space.substring(2) + '}'
    } else {
      out += space.substring(2) + '},\n'
    }
  } else {
    out = obj
  }
  return out
}

module.exports = formatObject
