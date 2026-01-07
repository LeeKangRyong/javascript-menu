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

    #splitSampleMenu(sampleMenuStr) {
        return sampleMenuStr
            .split(/,\s*/)
            .map(menu => menu.trim())
            .filter(menu => menu.length > 0);
    }

    #getSampleMenu() {
        return this.#splitSampleMenu(this.#getSampleMenuStr());
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
        if (!cannotEatMenu || cannotEatMenu.trim() === '') {
            return [];
        }

        const cannotEatMenuArray = this.#splitNames(cannotEatMenu);
        MenuValidator.isValidCannotEatMenu(cannotEatMenuArray, this.#sampleMenu);
        
        return cannotEatMenuArray;
    }
}

export { Menu };