import { MissionUtils } from "@woowacourse/mission-utils";
import { INPUT } from "./utils/InputConstants.js";

class Input {
    constructor() {}

    // 상황에 따라 async/await도 사용하기!
    static async readNamesOfCoach() {
        const namesOfCoach = await MissionUtils.Console.readLineAsync(
            INPUT.NAME_OF_COACH
        );

        return namesOfCoach;
    }

    static async readCannotEatMenu(nameOfCoach) {
        const cannotEatMenu = await MissionUtils.Console.readLineAsync(
            `${nameOfCoach}${INPUT.CANNOT_EAT_MENU}`
        );

        return cannotEatMenu;
    }

}

export { Input };