type Foo = {
  foo: string;
};
type Bar = {
  bar: string;
};

const expressionReturningFoo = (): Foo => {
  return {
    foo: "foo",
  };
};
const processBar = (x: Bar): void => {
  console.log(x);
};

function f1() {
  const x: any = expressionReturningFoo(); // 이렇게 해서 x를 다른곳에서 쓰거나 return하게 되면 any가 퍼져버리는 상황이 올 수 있다.
  processBar(x);
}
function f2() {
  const x = expressionReturningFoo();
  processBar(x as any); // 이게 더 낫다
}
