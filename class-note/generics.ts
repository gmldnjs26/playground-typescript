function logText(text) {
  console.log(text);
  return text;
}

function logTextTs<T>(text: T): T{
  console.log(text);
  return text;  
}
logText('Hi');

