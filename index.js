function calculateAngle(hour, minute) {
  // calculating hour hand angle
  const handHour = hour * 30 + minute * 0.5

  // calculating minute hand angle
  const minuteHour = (minute / 60) * 360

  // calculating angle difference
  const angleDiff = Math.abs(handHour - minuteHour)

  return angleDiff
}

console.log(calculateAngle(3, 45))
