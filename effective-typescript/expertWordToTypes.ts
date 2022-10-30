/**
 * 밑의 코드의 문제점
 * name이 너무 일반적인 용어, 동물의 학명인지 일반적인 명칭인지 구분 불가능
 * endangered 속성이 멸종 위기를 표현하기 위해 boolean 타입을 사용한 것이 이상. 이미 멸종된 동물은 true?가 되는건가
 * habitat 속성은 너무 범위가 넓은 string 타입일 뿐만 아니라 서식지라는 뜻 자체도 불분명
 * 객체의 변수명이 leopard이지만, name의 속성의 값은 'Snow Leopard' 인데 객체의 이름과 속성의 name이 다른 의미를 갖고 있는지가 불분명
 */
interface Animal {
  name: string;
  endangered: boolean;
  habitat: string;
}

const leopard: Animal = {
  name: "Snow Leopard",
  endangered: false,
  habitat: "tundra",
};

/**
 * 밑의 코드의 개선점
 * name은 commonName, genus, species 등 더욱 구체적인 용어로 대체
 * endangered는 동물 보호 등급에 대한 IUCN의 표준 분류 체계인 ConservationStatus 타입의 status로 변경
 * habitat은 기후를 뜻하는 climates로 변경, 쾨펜 기후 분류(Koppen climate classification)을 사용
 */

interface Animal2 {
  commonName: string;
  genus: string;
  species: string;
  status: ConservationStatus;
  climates: KoppenClimate[];
}
type ConservationStatus = "EX" | "EW" | "CR" | "EN" | "VU" | "NT" | "LC";
type KoppenClimate = "Af" | "Am" | "As" | "Aw" | "BSh" | "BSk" | "BWh" | "BWk";

const snowLeopard: Animal2 = {
  commonName: "Snow Leopard",
  genus: "Panthera",
  species: "Uncia",
  status: "VU",
  climates: ["Af", "BSk"],
};
