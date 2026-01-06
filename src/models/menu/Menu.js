import { MenuValidator } from "./utils/MenuValidator.js";
import { SEPARATOR, SAMPLE } from "../../shared/index.js";

class Menu {
    #coachArray;
    #sampleMenu;

    constructor(namesOfCoach) {
        MenuValidator.isSplittedBySeparator(namesOfCoach);

        const arrayOfCoach = this.#splitNames(namesOfCoach);
        MenuValidator.isValidCoachArray(arrayOfCoach);

        this.#coachArray = arrayOfCoach;
        this.#sampleMenu = this.#getSampleMenu();
    }

    #splitNames(names) {
        return names.split(SEPARATOR);
    }

    #getSampleMenu() {
        return this.#splitNames(this.#getSampleMenuStr());
    }

    #getSampleMenuStr() {
        const eachSampleMenuStr = Object.values(SAMPLE);

        return eachSampleMenuStr.join(SEPARATOR);
    }


    getCoachArray() {
        return this.#coachArray;
    }

    getSampleMenu() {
        return this.#sampleMenu;
    }

    getCannotEatMenu(cannotEatMenu) {
        const cannotEatMenuArray = this.#splitNames(cannotEatMenu);

        MenuValidator.isValidCannotEatMenu(cannotEatMenuArray, this.#sampleMenu);
    }
}

export { Menu };