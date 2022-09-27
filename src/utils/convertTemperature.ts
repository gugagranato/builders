export const convertTemperature = (kelvinTemperature: number) => {
  if (!kelvinTemperature) return false
  let celsius = kelvinTemperature - 273.15

  celsius = Number(celsius.toString().split('.')[0])

  return celsius
}
