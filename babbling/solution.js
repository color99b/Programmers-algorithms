function solution(babbling) {
  var answer = 0;
  let result;

  result = babbling.reduce((acc, cur) => {
    cur = cur.replace(/ayaaya|yeye|woowoo|mama/g, "A");
    cur = cur.replace(/aya|ye|woo|ma/g, "");
    console.log(cur);

    if (cur == "") answer++;
  }, 0);
  return answer;
}
