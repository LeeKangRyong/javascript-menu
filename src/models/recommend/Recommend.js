import { MissionUtils } from "@woowacourse/mission-utils";
import { SAMPLE, SEPARATOR } from "../../shared/index.js";

class Recommend {
    #cannotEatMenuArray;
    #categories;
    #eatableMenuObject;

    constructor(cannotEatMenuArray) {
        this.#cannotEatMenuArray = cannotEatMenuArray;
        this.#categories = Object.keys(SAMPLE);
        this.#eatableMenuObject = this.#getEatableMenu();
    }

    getEatableMenuObject() {
        return this.#eatableMenuObject;
    }

    // 카테고리를 선택하고 해당 카테고리에서 메뉴를 추천
    getRecommendMenu() {
        const category = this.#chooseCategory();
        const menuOfCategory = this.#eatableMenuObject[category];

        const menuIndices = Array.from(
            { length: menuOfCategory.length }, 
            (_, i) => i
        );
        
        const shuffledMenuIndices = MissionUtils.Random.shuffle(menuIndices);
        const menu = menuOfCategory[shuffledMenuIndices[0]];

        return [category, menu];
    }

    #getEatableMenu() {
        let eatableMenuObject = {};
        
        for (let categoryName of this.#categories) {
            const menuArray = this.#getMenuOfCategory(SAMPLE[categoryName]);
            const eatableMenuArray = this.#getEatableMenuOfCategoryArray(menuArray);
            eatableMenuObject[categoryName] = eatableMenuArray;
        }
        
        return eatableMenuObject;
    }

    #getEatableMenuOfCategoryArray(menuArray) {
        return menuArray.filter(menu => !this.#cannotEatMenuArray.includes(menu));
    }

    #getMenuOfCategory(categoryMenuString) {
        return categoryMenuString.split(SEPARATOR).map(menu => menu.trim());
    }

    #chooseCategory() {
        const categoryIndex = MissionUtils.Random.pickNumberInRange(1, 5);
        return this.#categories[categoryIndex - 1];
    }
}

export { Recommend };