//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const oneGigasecond = 1000000000;

export function gigasecond(date) {
  // JS timestamps are in miliseconds
  const newTimestamp = date.getTime() + oneGigasecond * 1000;
  return new Date(newTimestamp);
}
