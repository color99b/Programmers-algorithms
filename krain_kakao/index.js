function solution(board, moves) {
  let answer = 0;
  let resultArr = [];
  // let arr = new Array(board.length);
  // for (let i = 0; i < arr.length; i++) {
  //   arr[i] = new Array(board.length);
  // }
  // for (let k = 0; k < board.length; k++) {
  //   for (let q = 0; q < board.length; q++) {
  //     arr[k][q] = board[q][k];
  //   }
  // }
  // console.log(arr[1][3]);

  // move가 1일때. arr[0][0부터 차례대로]
  // move가 2일때, arr[1][0부터 차례대로 뽑힌다.]
  let order;
  let doll;

  for (let n = 0; n < moves.length; n++) {
    order = moves[n];

    for (let dollOrder = 0; dollOrder < board.length; dollOrder++) {
      doll = board[dollOrder][order];
      if (doll == 0) continue;
      else {
        resultArr.push(doll);
        board[dollOrder][order] = 0;
      }
    }

    if (resultArr[n] == resultArr[n + 1]) {
      resultArr.pop();
      resultArr.pop();
      answer += 2;
    }
  }

  // for(let j=0; j<moves.length; j++)
  //   {
  //     let order = moves[j];
  //     for(let l=0; l<)
  //     resultArr.push(arr[order][l]);
  //   }

  // console.log(arr[1][3]);
  // console.log(arr);
  console.log(resultArr);

  return console.log(answer + "결과값");
}

solution(
  [
    [0, 0, 0, 0, 0], //[0,0]
    [0, 0, 1, 0, 3], //[1,0]
    [0, 2, 5, 0, 1], //[2,1]
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
  [1, 5, 3, 5, 1, 2, 1, 4]
);
