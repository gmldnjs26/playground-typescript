// "noImplicitAny": true
const 이건anyArr = []; // any[]로 되어있지만,
이건anyArr.push(1);
console.log(이건anyArr); // number[]로 진화
이건anyArr.push("ㅇ");
console.log(이건anyArr); // (string | number)[]로 진화
