export const getDeviceType = () => {
  let userAgent = navigator.userAgent;
  if (/iPhone/.test(userAgent)) {
    return "iphone";
  }
  if (/Android/.test(userAgent)) {
    return "android";
  }
  return "pc";
}