import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../utils/constants';
import InputValidator from '../validator/inputValidator';

class InputView {
  static async purchaseAmount() {
    const amount = await InputView.getInputWithValidate(
      async () => Console.readLineAsync(INPUT_MESSAGE.PURCHASE_AMOUNT),
      InputValidator.purchaseInput,
    );
    return Number(amount);
  }

  static async winningNumbers() {
    const numbers = await InputView.getInputWithValidate(
      async () => Console.readLineAsync(INPUT_MESSAGE.WINNING_NUMBERS),
      InputValidator.winningNumbers,
    );
    return numbers.split(',').map(number => Number(number));
  }

  static async bonusNumber() {
    const bonusNumber = await InputView.getInputWithValidate(
      async () => Console.readLineAsync(INPUT_MESSAGE.BONUS_NUMBER),
      InputValidator.bonusNumber,
    );
    return Number(bonusNumber);
  }

  static async getInputWithValidate(userInput, validate) {
    const input = await userInput();
    validate(input);
    return input;
  }
}

export default InputView;
