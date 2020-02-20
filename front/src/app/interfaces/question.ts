/**
 * interface pour poser une question
 *
 * @export
 */
export interface Question {
  /**
   * oui c'est le libellé de la question
   *
   */
  label: string;
  answerA: string;
  answerB: string;
  answerC: string;
  answerD: string;
  correctAnswer: string;
}
