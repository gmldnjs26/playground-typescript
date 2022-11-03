type AbsolutePath = string & { _brand: "abs" };

function listAbsolutePath(path: AbsolutePath) {
  console.log(path);
}

function isAbsolutePath(path: string): path is AbsolutePath {
  return path.startsWith("/");
}

function test(path: string) {
  if (isAbsolutePath(path)) {
    listAbsolutePath(path);
  }
  listAbsolutePath(path);
}
