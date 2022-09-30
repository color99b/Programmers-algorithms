// function solution(n) {
//   var answer = [];

//   //     dp(n,1,3,2)

//   //     return arr
//   // }
//   // var arr=[]

// function dp(n,src,dst,mid){
//     if(n==1){
//         arr.push([src,dst])
//     }
//     else{
//         dp(n-1,src,mid,dst)
//         arr.push([src,dst])
//         dp(n-1,mid,dst,src)
//     }

//   // 1번에서 3번으로 옮긴다.
//   // 1-2
//   // 1-3
//   // 2-3
//   // ----------
//   // 3개일때
//   // 1-3
//   // 1-2
//   // 3-2
//   // 1-3
//   // 2-1
//   // 2-3
//   // 1-3
//   // -----------

//   // n(n-1)

//   if (n == 1) {
//     answer.push([1, 3]);
//   } else {
//     solution(n - 1);
//     answer.push([1, 3]);
//     solution(n - 1);
//   }
// }

// // solution(3);

// function hanoi(n, start, end) {
//   if (n <= 0) return;
//   if (n % 2 == 0) {
//     end = "C";
//   }
//   hanoi(n - 1, "A", "B");
//   console.log(`${n}번째 원반을 ${start}에서 ${end}로 이동합니다.`);
//   hanoi(n - 1, "B", "C");
// }

// hanoi(n-1, A, B);
// console.log(`${n}번째 원반을A에서 C로 이동합니다.`);
// hanoi(n-1, B, C);

// hanoi(n-1){
//   hanoi(n-2, A, C);
//   console.log(`${n}번째 원반을 B로 이동합니다.`);
//   hanoi(n-2, C , B);
// }

// hanoi(n-2){
//   hanoi(n-3,A,B );
//   console.log(`${n}번째 원반을 C로 이동합니다.`);
//   hanoi(n-3,B, C);
// }

//   return;
// }
// hano1 - 1>3

// hano2 - 1>2 1>3 2>3

// hano3 - 1>3 1>2 3>2 1>3 2>1 2>3 1>3

// hano4 - 1>2 1>3 2>3 1>2 3>1 3>2 1>2 1>3 2>3 2>1 3>1 2>3 1>2 1>3 2>3

// hanoi 3 -> hanoi 2 마지막 hanoi 2  -> hanoi 1
//                                             A->C

// hanoi(3);

function solution(n, start = 1, end = 3) {
  if (n === 1) return [[start, end]];

  return [
    ...solution(n - 1, start, 6 - start - end),
    [start, end],
    ...solution(n - 1, 6 - start - end, end),
  ];
}

function hanoi(n, start = 1, end = 3) {
  if (n === 1) {
    return console.log(
      `${n}번째 원반을 ${start}기둥에서 ${end}기둥으로이동합니다.`
    );
  }

  hanoi(n - 1, start, 6 - start - end);
  console.log(`${n}번째 원반을 ${start}기둥에서 ${end}기둥으로이동합니다.`);
  hanoi(n - 1, 6 - start - end, end);
}

hanoi(4);
console.log(solution(4));

//     solution(n, start=1, end=3){
//         //이렇게 쓰면 if(!start) 이렇게 처리안해도
//         // start가 매개변수로 정의되지 않으면 알아서 1을 넣어준다는 뜻.
//     }

// }
// //       dp(n,1,3,2)

// //       return arr
// //   }
// //   var arr=[]

// //   function dp(n,src,dst,mid){
// //       if(n==1){
// //           arr.push([src,dst])
// //       }
// //       else{
// //           dp(n-1,src,mid,dst)
// //           arr.push([src,dst])
// //           dp(n-1,mid,dst,src)
// //       }
