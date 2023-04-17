export class Question {
  /**
   *
   * @param {string} text this is a test of the question
   * @param {string[]} choices these are the choices of the questions
   * @param {string} answer this is the answer of the question
   */

  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }

  /**
   *
   * @param {string} choice some test to guest
   * @returns {boolean} return if the answer is correct
   */
  correctAnswer(choice) {
    return choice === this.answer;
  }
}
