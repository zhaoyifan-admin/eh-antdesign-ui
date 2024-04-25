/* 地图坐标系转换 */
const pi = 3.1415926535897932384626
const x_pi = (3.14159265358979324 * 3000.0) / 180.0
const a = 6378245.0
const ee = 0.00669342162296594323

/** 保留小数点后六位
 * @param num
 * @return
 */
const retain6 = (num: number) => {
  return parseFloat(num.toFixed(6))
}

const transformLat = (x: number, y: number) => {
  let ret =
    -100.0 +
    2.0 * x +
    3.0 * y +
    0.2 * y * y +
    0.1 * x * y +
    0.2 * Math.sqrt(Math.abs(x))
  ret +=
    ((20.0 * Math.sin(6.0 * x * pi) + 20.0 * Math.sin(2.0 * x * pi)) * 2.0) /
    3.0
  ret +=
    ((20.0 * Math.sin(y * pi) + 40.0 * Math.sin((y / 3.0) * pi)) * 2.0) / 3.0
  ret +=
    ((160.0 * Math.sin((y / 12.0) * pi) + 320 * Math.sin((y * pi) / 30.0)) *
      2.0) /
    3.0
  return ret
}
const transformLon = (x: number, y: number) => {
  let ret =
    300.0 +
    x +
    2.0 * y +
    0.1 * x * x +
    0.1 * x * y +
    0.1 * Math.sqrt(Math.abs(x))
  ret +=
    ((20.0 * Math.sin(6.0 * x * pi) + 20.0 * Math.sin(2.0 * x * pi)) * 2.0) /
    3.0
  ret +=
    ((20.0 * Math.sin(x * pi) + 40.0 * Math.sin((x / 3.0) * pi)) * 2.0) / 3.0
  ret +=
    ((150.0 * Math.sin((x / 12.0) * pi) + 300.0 * Math.sin((x / 30.0) * pi)) *
      2.0) /
    3.0
  return ret
}

const outOfChina = (lon: any, lat: any) => {
  if (lon < 72.004 || lon > 137.8347) return true
  return lat < 0.8293 || lat > 55.8271
}
const transform = (lon: any, lat: any) => {
  if (outOfChina(lon, lat)) {
    // @ts-ignore
    return new [lon, lat]()
  }
  let dLat = transformLat(lon - 105.0, lat - 35.0)
  let dLon = transformLon(lon - 105.0, lat - 35.0)
  const radLat = (lat / 180.0) * pi
  let magic = Math.sin(radLat)
  magic = 1 - ee * magic * magic
  const sqrtMagic = Math.sqrt(magic)
  dLat = (dLat * 180.0) / (((a * (1 - ee)) / (magic * sqrtMagic)) * pi)
  dLon = (dLon * 180.0) / ((a / sqrtMagic) * Math.cos(radLat) * pi)
  const mgLat = lat + dLat
  const mgLon = lon + dLon
  return [mgLon, mgLat]
}
/**
 * 84 to 火星坐标系【高德、腾讯】 (GCJ-02) World Geodetic System ==> Mars Geodetic System
 *
 * @param lat
 * @param lon
 * @return
 */
const gps84_To_Gcj02 = (lon: any, lat: any) => {
  if (outOfChina(lon, lat)) {
    return [lon, lat]
  }
  let dLat = transformLat(lon - 105.0, lat - 35.0)
  let dLon = transformLon(lon - 105.0, lat - 35.0)
  const radLat = (lat / 180.0) * pi
  let magic = Math.sin(radLat)
  magic = 1 - ee * magic * magic
  const sqrtMagic = Math.sqrt(magic)
  dLat = (dLat * 180.0) / (((a * (1 - ee)) / (magic * sqrtMagic)) * pi)
  dLon = (dLon * 180.0) / ((a / sqrtMagic) * Math.cos(radLat) * pi)
  const mgLat = retain6(lat + dLat)
  const mgLon = retain6(lon + dLon)
  return [mgLon, mgLat]
}
/**
 * * 火星坐标系【高德、腾讯】 (GCJ-02) to 84 * * @param lon * @param lat * @return
 * */
const gcj02_To_Gps84 = (lon: any, lat: any) => {
  const gps = transform(lon, lat)
  const mgLon = lon * 2 - gps[0]
  const mgLat = lat * 2 - gps[1]
  return [mgLon, mgLat]
}
/**
 * 火星坐标系【高德、腾讯】 (GCJ-02) 与百度坐标系 (BD-09) 的转换算法 将 GCJ-02 坐标转换成 BD-09 坐标
 *
 * @param lat
 * @param lon
 */
const gcj02_To_Bd09 = (lon: any, lat: any) => {
  const x = lon
  const y = lat
  const z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * x_pi)
  const theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * x_pi)
  const mgLon = z * Math.cos(theta) + 0.0065
  const mgLat = z * Math.sin(theta) + 0.006
  return [mgLon, mgLat]
}
/**
 * * 火星坐标系【高德、腾讯】 (GCJ-02) 与百度坐标系 (BD-09) 的转换算法 * * 将 BD-09 坐标转换成GCJ-02 坐标 * * @param
 * bd_lat * @param bd_lon * @return
 */
const bd09_To_Gcj02 = (lon: any, lat: any) => {
  const x = lon - 0.0065
  const y = lat - 0.006
  const z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * x_pi)
  const theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * x_pi)
  const mgLon = z * Math.cos(theta)
  const mgLat = z * Math.sin(theta)
  return [mgLon, mgLat]
}
/** 将gps84转为bd09
 * @param lat
 * @param lon
 * @return
 */
const gps84_To_bd09 = (lon: any, lat: any) => {
  const gcj02 = gps84_To_Gcj02(lon, lat)
  return gcj02_To_Bd09(gcj02[0], gcj02[1])
}
const bd09_To_gps84 = (lon: any, lat: any) => {
  const gcj02 = bd09_To_Gcj02(lon, lat)
  const gps84 = gcj02_To_Gps84(gcj02[0], gcj02[1])
  // 保留小数点后六位
  gps84[0] = retain6(gps84[0])
  gps84[1] = retain6(gps84[1])
  return gps84
}
export {
  gps84_To_Gcj02,
  gcj02_To_Gps84,
  gps84_To_bd09,
  bd09_To_gps84,
  gcj02_To_Bd09,
}
