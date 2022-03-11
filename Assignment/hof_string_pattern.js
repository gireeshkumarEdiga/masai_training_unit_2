var array = ["apple", "windows", "ubuntu", "cola", "system"];

let res1 =  array.filter((element) => element[0]=="a" || element[element.length-1]=="a")
console.log(res1);
