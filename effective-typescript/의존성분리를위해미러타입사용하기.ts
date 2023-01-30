export default {};
interface Person {
  name: string;
  age: number;
}

const developer = { name: "heewon", age: 30, position: "front-end" };

// 구조적 타이핑을 이용한 사례
function testFunction(param: Person) {
  console.log(param);
}

testFunction(developer);
