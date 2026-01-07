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

    getRecommendMenu() {
        return this.#chooesMenuOfCategory();
    }

    // TODO : 못 먹는 음식 제외하기
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

    // TODO : 한 카테고리에서 음식 선택
    #chooesMenuOfCategory() {
        const recommendCategory = this.#chooseCategory();
        const menuOfRecommendCategory = this.#eatableMenuObject[recommendCategory];

        const ㅡ = Array.from(
            { length: menuOfRecommendCategory.length }, 
            (_, i) => i
        );
        
        // 2. Random.shuffle()로 인덱스 배열 섞기 (숫자 배열이므로 가능!)
        const shuffledㅡ = MissionUtils.Random.shuffle(ㅡ);
        
        // 3. 첫 번째 인덱스로 메뉴 선택
        const recommendMenu = menuOfRecommendCategory[shuffledIndices[0]];

        return [recommendCategory, recommendMenu];
    }

    // TODO : 카테고리 선택
    #chooseCategory() {
        return this.#categories[this.#getCategoryNumber()-1];
    }

    #getCategoryNumber() {
        return MissionUtils.Random.pickNumberInRange(1, 5);
    }
}

export { Recommend };