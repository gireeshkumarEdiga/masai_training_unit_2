var array = ["Apple", "Windows", "Linux", "Kindle", "Quiz"];

let res = array.map((element) => element.length).filter((element) => element%2==1).reduce((sum,element) => sum+element);

console.log(res);