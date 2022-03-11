var array = [2, 4, 5, 3, 6, 8];

let res = array.filter((element,index) => index%2==0).filter((element) => element%2==0);

console.log(res);