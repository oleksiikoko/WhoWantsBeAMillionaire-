import AnswerInterface from "./Answer";

export default interface QuestionInterface {
  text: string;
  answers: Array<AnswerInterface>;
  price: number;
}
