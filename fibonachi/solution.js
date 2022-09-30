function solution(n) {
  var answer = 0;
  let s0 = 0;
  let s1 = 1;
  for (let i = 1; i < n; i++) {
    answer = s0 + s1;
    s0 = s1;
    s1 = answer;

    if (s1 >= 1234567) {
      s1 = s1 - 1234567;
    }
  }

  return s1;
}

function solutionRetry(n) {
  let f0 = 0;
  let f1 = 1;
  let result = solutionRetry(n - 1) + solutionRetry(n - 2);
}

console.log(solutionRetry(5));
console.log(solutionRetry(10));
console.log(solutionRetry(7));
console.log(solutionRetry(15));
