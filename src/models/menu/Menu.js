import { MenuValidator } from "./utils/MenuValidator.js";
import { SEPARATOR } from "../../shared/index.js";

class Menu {
    #coachArray;

    constructor(namesOfCoach) {
        MenuValidator.isSplittedBySeparator(namesOfCoach);

        const arrayOfCoach = this.#splitNamesOfCoach(namesOfCoach);
        MenuValidator.isValidCoachArray(arrayOfCoach);

        this.#coachArray = arrayOfCoach;
    }

    #splitNamesOfCoach(namesOfCoach) {
        return namesOfCoach.split(SEPARATOR);
    }

    getCoachArray() {
        return this.#coachArray;
    }
}

export { Menu };