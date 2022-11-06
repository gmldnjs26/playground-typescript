function shallowObjectEqual<T extends object>(a: T, b: T): boolean {
  for (const [k, aVal] of Object.entries(a)) {
    if (!(k in b) || aVal !== b[k]) {
      // 원래는 여기서 에러가? 났었다고 하는데 지금은 안나는걸 보니 타입 시스템이 좀더 구문을 잘 이해하게 된거 같다.
      return false;
    }
  }
  return Object.keys(a).length === Object.keys(b).length;
}
