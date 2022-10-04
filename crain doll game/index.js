function solution(board, moves) {
  let resultArr = [];
  let result = 0;
  let arr = new Array(board.length);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(board.length);
  }
  for (let k = 0; k < board.length; k++) {
    for (let q = 0; q < board.length; q++) {
      arr[k][q] = board[q][k];
    }
  }
  // move가 1일때. arr[0][0부터 차례대로]
  // move가 2일때, arr[1][0부터 차례대로 뽑힌다.]

  for (let n = 0; n < moves.length; n++) {
    let order = moves[n] - 1;
    for (let m = 0; m < board.length; m++) {
      const doll = arr[order][m];

      if (doll) {
        arr[order][m] = 0;
        if (
          resultArr.length !== 0 &&
          resultArr[resultArr.length - 1] === doll
        ) {
          resultArr.pop();
          result += 2;
        } else {
          resultArr.push(doll);
        }
        break;
      }
    }
  }

  return result;
}
