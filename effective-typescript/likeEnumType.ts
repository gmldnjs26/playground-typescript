type Prefecture = {
  code: "tokyo" | "osaka" | "kanagawa";
  name: "도쿄" | "오사카" | "카나가와";
};

type PrefectureCode = Prefecture["code"];
type PrefectureName = Prefecture["name"];
