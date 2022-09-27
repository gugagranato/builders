export const isToday = (timestamp: EpochTimeStamp) => {
  const today = new Date()
  const date = new Date(timestamp * 1000)
  if (today.setHours(0, 0, 0, 0) == date.setHours(0, 0, 0, 0)) {
    return true
  } else {
    return false
  }
}
