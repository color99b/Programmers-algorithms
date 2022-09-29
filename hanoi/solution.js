function solution(n) {
  var answer = [];

  //     dp(n,1,3,2)

  //     return arr
  // }
  // var arr=[]

  // function dp(n,src,dst,mid){
  //     if(n==1){
  //         arr.push([src,dst])
  //     }
  //     else{
  //         dp(n-1,src,mid,dst)
  //         arr.push([src,dst])
  //         dp(n-1,mid,dst,src)
  //     }

  // 1번에서 3번으로 옮긴다.
  // 1-2
  // 1-3
  // 2-3
  // ----------
  // 3개일때
  // 1-3
  // 1-2
  // 3-2
  // 1-3
  // 2-1
  // 2-3
  // 1-3
  // -----------

  // n(n-1)

  if (n == 1) {
    answer.push([1, 3]);
  } else {
    solution(n - 1);
    answer.push([1, 3]);
    solution(n - 1);
  }
}

solution(3);
