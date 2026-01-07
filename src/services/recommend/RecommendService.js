import { Recommend } from "../../models/index.js";
import { RecommendServiceValidator } from "./utils/RecommendServiceValidator.js";

class RecommendService {
    #coachName;
    #cannotEatMenuArray;
    #weekMenu;
    #weekCategories;

    constructor(coachName, cannotEatMenuArray) {
        this.#coachName = coachName;
        this.#cannotEatMenuArray = cannotEatMenuArray;
        this.#weekMenu = [];
        this.#weekCategories = [];
    }

    recommendWeekMenu() {
        const recommend = new Recommend(this.#cannotEatMenuArray);
        
        while (this.#weekMenu.length < 5) {
            const [category, menu] = recommend.getRecommendMenu();
            
            if (RecommendServiceValidator.isValidMenu(category, menu, this.#weekCategories, this.#weekMenu)) {
                this.#weekCategories.push(category);
                this.#weekMenu.push(menu);
            }
        }

        return {
            coach: this.#coachName,
            categories: this.#weekCategories,
            menus: this.#weekMenu
        };
    }

    getWeekMenu() {
        return this.#weekMenu;
    }

    getWeekCategories() {
        return this.#weekCategories;
    }
}

export { RecommendService };