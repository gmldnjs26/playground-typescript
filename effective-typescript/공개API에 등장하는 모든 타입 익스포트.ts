interface SecretName {
  firstName: string;
  lastName: string;
}
interface SecretSanta {
  name: string;
  gift: string;
}

export const getGift = (name: SecretName, gift: string): SecretSanta => {
  return {
    name: name.firstName + name.lastName,
    gift,
  };
};

// 이런식으로 타입을 추출할 수 있다.
type MySanta = ReturnType<typeof getGift>;
type MyName = Parameters<typeof getGift>;
