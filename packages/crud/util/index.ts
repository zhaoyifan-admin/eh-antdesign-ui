import mitt from 'mitt'

const emitter = mitt()

const deepClone = (obj: any) => {
  const target: any = {}
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (typeof obj[key] === 'object') {
        target[key] = deepClone(obj[key])
      } else {
        target[key] = obj[key]
      }
    }
  }
  return target
}
export { deepClone, emitter }