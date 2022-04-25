export function validateMinAndMaxTime(date) {
  if (date.getHours < 6 || (date.getHours === 6 && date.getMinutes < 30))
    return false;
  if (date.getHours > 18 || (date.getHours === 18 && date.getMinutes < 0))
    return false;
  return true;
}
