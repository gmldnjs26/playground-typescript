let mk: unknown = "string";
mk = 1;
mk = { key: "asdads" };

// Type 'unknown' is not assignable to type 'number'
let num: number = mk;

// Type 'string' is not assignable to type 'never'
let nv: never = "string";
// Type 'number' is not assignable to type 'never'
let nv2: never = 2;

interface Book {
  name: string;
  author: string;
}

const parseYamL = (text: string): any => ({});

const book = parseYamL(`name: Jane 
                        author: Char`);
// book이 any가 되므로 이하의 두줄 코드는 어떠한 타입에러도 나지 않고 런타임에서 에러가 날것이다.
console.log(book.title);
book();

const safetyParseYamL = (text: string): unknown => ({});

const book2 = safetyParseYamL(`name: Jane 
                                author: Char`);
// Object is of type 'unknown'
console.log(book2.title);
// Object is of type 'unknown'
book2();

const book3 = safetyParseYamL(`name: Jane 
                                author: Char`) as Book;
// Property 'title' does not exist on type 'Book'
console.log(book3.title);
// This expression is not callable.Type 'Book' has no call signatures
book3();
