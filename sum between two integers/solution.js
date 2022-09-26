function solution(a, b) {
  var answer = 0;
  let sum = 0;
  if (a == b) answer = a;
  else if (a > b) {
    let temp;
    temp = a;
    a = b;
    b = temp;
  }

  for (let i = a; i >= a && i <= b; i++) {
    sum += i;
  }
  return sum;
}
