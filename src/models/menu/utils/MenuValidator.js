import { SEPARATOR, WoowaError } from "../../../shared/index.js";
import { MENU, MENU_ERROR } from "./MenuConstants.js";

class MenuValidator {
    
    constructor() {}

    static isSplittedBySeparator(namesOfCoach) {
        if (!namesOfCoach.includes(SEPARATOR)) {
            throw new WoowaError(MENU_ERROR.INVALID_SEPARATOR);
        }
    }

    static isValidCoachArray(coachArray) {
        this.#isValidNumberOfCoach(coachArray);
        this.#isDuplicatedNameExists(coachArray);

        coachArray.forEach(coach => this.#isValidNameOfCoach(coach));
    }

    static isValidCannotEatMenu(cannotEatMenuArray, sampleMenu) {
        this.#isDuplicatedNameExists(cannotEatMenuArray);
        this.#isVaildNumberOfCannotEatMenu(cannotEatMenuArray);
        this.#isInSampleMenu(cannotEatMenuArray, sampleMenu);
    }

    static #isInSampleMenu(cannotEatMenuArray, sampleMenu) {
        cannotEatMenuArray.forEach(menu => {
            if (!sampleMenu.includes(menu)) {
                throw new WoowaError(MENU_ERROR.NON_SAMPLE_MENU);
            }
        }); 
    }

    static #isVaildNumberOfCannotEatMenu(cannotEatMenuArray) {
        const cannotEatMenuLength = cannotEatMenuArray.length;

        if (cannotEatMenuLength > MENU.NUMBER_OF_CANNT_EAT_MENU_END) {
            throw new WoowaError(MENU_ERROR.INVALID_NUMBER_OF_CANNOT_EAT_MENU);
        }
    }

    static #isValidNameOfCoach(name) {
        const nameLength = name.length;

        if (nameLength < MENU.NAME_OF_COACH_START || nameLength > MENU.NAME_OF_COACH_END) {
            throw new Error(MENU_ERROR.INVALID_LENGTH_OF_NAME);
        }
    }

    static #isValidNumberOfCoach(coachArray) {
        const lengthOfCoachArray = coachArray.length;

        if (lengthOfCoachArray < MENU.NUMBER_OF_COACH_START || lengthOfCoachArray > MENU.NUMBER_OF_COACH_END) {
            throw new WoowaError(MENU_ERROR.INVALID_NUMBER_OF_COACH);
        }
    }

    static #isDuplicatedNameExists(coachArray) {
        if (coachArray.length !== new Set(coachArray).size) {
            throw new WoowaError(MENU_ERROR.DUPLICATED_NAME_EXISTS);
        }
    }
}

export { MenuValidator };