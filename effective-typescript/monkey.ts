// 모듈의 관점(타입스크립트 파일이 import export를 사용하는 경우)에서
// 제대로 작동하게 하려면 declare global을 해줘야 한다.
export {};

declare global {
  interface Document {
    monkey: string;
    monkey2: number;
  }
}
