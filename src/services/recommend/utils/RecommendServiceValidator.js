class RecommendServiceValidator {
    
    constructor() {}

    // 메뉴가 유효한지 종합 검증
    static isValidMenu(category, menu, weekCategories, weekMenus) {
        return this.#isNotDuplicateMenu(menu, weekMenus) && this.#isValidCategoryCount(category, weekCategories);
    }

    // 중복 메뉴 체크
    static #isNotDuplicateMenu(menu, weekMenus) {
        return !weekMenus.includes(menu);
    }

    // 카테고리 최대 2회 제한 체크
    static #isValidCategoryCount(category, weekCategories) {
        const categoryCount = weekCategories.filter(c => c === category).length;
        return categoryCount < 2;
    }
}

export { RecommendServiceValidator };