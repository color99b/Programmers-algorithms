function decimal_convers(n, arr) {
  if (n < 2) {
    return arr.push("1");
  }
  if (n % 2 == 0) {
    arr.push("0");
  } else {
    arr.push("1");
  }

  n = parseInt(n / 2);
  decimal_convers(n, arr);
}

function result(n) {
  let arr = [];
  decimal_convers(n, arr);
  arr.reverse();

  return arr.join("");
}

console.log(result(22));
