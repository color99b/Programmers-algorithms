function solution(dartResult) {
  var answer = 0;
  let gameCount = 3;
  let resultNum = 0;
  const oneR = /[0-9]/gi;
  const twoR = /[SDT]/g;
  let oneTemp = [];
  let one = dartResult.match(oneR);

  let two = dartResult.match(twoR);
  if (one.length >= 4) {
    for (let i = 0; i < one.length; i++) {
      if (one[i] == "1" && one[i + 1] == "0") {
        one[i] = 10;
      }
    }
  }

  let tempOne = one.filter(function (item, index) {
    if (item != 0) {
      oneTemp.push(item);
    } else if (item == 0 && one[index - 1] != 10) {
      oneTemp.push(item);
    }
  });

  for (let i = 0; i < two.length; i++) {
    if (two[i] == "D") {
      oneTemp[i] = Math.pow(oneTemp[i], 2);
    } else if (two[i] == "T") {
      oneTemp[i] = Math.pow(oneTemp[i], 3);
    }
  }

  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] == "*") {
      if (i == 2) {
        oneTemp[0] *= 2;
      } else if (i == 5 || i == 4) {
        oneTemp[0] *= 2;
        oneTemp[1] *= 2;
      } else {
        oneTemp[1] *= 2;
        oneTemp[2] *= 2;
      }
    } else if (dartResult[i] == "#") {
      if (i == 2) {
        oneTemp[0] *= -1;
      } else if (i == 5 || i == 4) {
        oneTemp[1] *= -1;
      } else {
        oneTemp[2] *= -1;
      }
    }
  }

  for (let i = 0; i < oneTemp.length; i++) {
    resultNum += parseInt(oneTemp[i]);
  }

  return resultNum;
}

solution("3S2T*10D#");
