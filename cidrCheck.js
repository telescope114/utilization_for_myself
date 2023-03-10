/**
 * CIDR校验
 * @param {string} IP 
 * @param {string} CIDR 
 * @returns {boolean}
 */
const check = (IP, CIDR) => {
    const cidr = CIDR.split(/\.|\//)
    const ip4 = IP.split('.')
    let index = 0 // 数组序号，
    let aim = cidr[4]
    // 8，代表255校验
    while (aim >= 8) {
      if (cidr[index] === ip4[index]) {
        index += 1
        aim -= 8
      } else {
        return false
      }
    }
    let lastFirst = 1
    // 1，2^n校验
    while (aim > 0) {
      const num = Math.pow(2, 8 - lastFirst)
      if (((cidr[index] - num) >= 0 && (ip4[index] - num) >= 0) ||
        ((cidr[index] - num) < 0 && (ip4[index] - num) < 0)) {
        cidr[index] = cidr[index] > num ? cidr[index] > num : cidr[index]
        ip4[index] = ip4[index] > num ? ip4[index] > num : ip4[index]
        lastFirst++
        aim--
      } else {
        return false
      }
    }
    return true
  }
  
  export default check
  