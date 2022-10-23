export function hey(message) {
  const question = message.trim().endsWith('?');
  const upper = /[a-z]/i.test(message) && message.toUpperCase() == message;
  if (message.trim() == '') {
    return 'Fine. Be that way!'
  } else if (question && upper) {
    return 'Calm down, I know what I\'m doing!';
  } else if (question) {
    return 'Sure.'
  } else if (upper) {
    return 'Whoa, chill out!'
  } else {
    return 'Whatever.'
  }
};
