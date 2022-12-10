export function getFormattedDateAndTime(date) {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
}

export function getFormattedTime(date) {
  return `${date.getHours()}:${date.getMinutes()}`;
}
export function getFormattedDate(date) {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}
