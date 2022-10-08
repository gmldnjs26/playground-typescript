interface Todo {
  id: number;
  title: string;
  done: boolean;
}

// 함수의 스펙에 인터페이스를 활용
interface SumFunction {
  (a: number, b: number): number;
}
var sum: SumFunction;
sum = function(a: number, b: number): number {
  return a + b;
}

// 인덱싱
interface StringArray {
  [index: number]: string;
}
var arr: StringArray = ['a','b','c'];
// arr[0] = 10; Type 'number' is not assignable to type 'string'

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
}
var obj: StringRegexDictionary = {
  css: /\.css$/,
  // 'css2': 'abc', Type 'string' is not assignable to type 'RegExp'.ts(2322)

}

// Union Type (혹시 두개이상의 인터페이스 타입을 섞어쓰면 공통된 타입밖에 쓸 수 없다.)
function logMessage(value: string | number) {
  if (typeof value === 'number') {
    value.toLocaleString(); // value가 number에 대한 API나 속성들을 사용할 수 있다.
    console.log('value는 숫자입니다.');
  }
}

/**
 * Intersection Type 유니온이 교집합이면 인터섹션은 합집합 
 * 하지만 유니온 타입이 더 많이 쓰임
 * 모두 만족하는 속성들을 다 넘겨야 되게때문에 유연성이 떨어짐*/

enum Answer {
  Yes = 'Y',
  No = 'N'
}

function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log('정답입니다.');
  }
  if (answer === Answer.No) {
    console.log('오답입니다.');
  }
}
// askQuestion('예스'); Error
// askQuestion('yes!'); Error
// askQuestion('ㅇㅇ'); Error
askQuestion(Answer.Yes);


let todoItems :Todo[]

// api
function fetchTodoItems() {
  const todos = [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
  return todos;
}

// crud methods
function fetchTodos(): object[] {
  const todos = fetchTodoItems();
  return todos;
}

function addTodo(todo: Todo): void {
  todoItems.push(todo);
}

function deleteTodo(index: number): void {
  todoItems.splice(index, 1);
}

function completeTodo(index: number, todo: Todo) {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo(): Todo {
  return todoItems[0];
}

function showCompleted(): Todo[] {
  return todoItems.filter(item => item.done);
}

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems(): void {
  // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
  const item1 = {
    id: 4,
    title: '아이템1',
    done: true,
  }
  const item2 = {
    id: 5,
    title: '아이템2',
    done: true,
  }
  addTodo(item1);
  addTodo(item2);
}

// NOTE: 유틸 함수
function log(): void {
  console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();


