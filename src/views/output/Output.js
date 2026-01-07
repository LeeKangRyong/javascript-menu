import { MissionUtils } from "@woowacourse/mission-utils";
import { OUTPUT } from "./utils/OutputConstants.js";

class Output {
    constructor() {}

    static printHeader() {
        MissionUtils.Console.print(OUTPUT.START);
    }

    static printSpace() {
        MissionUtils.Console.print('\n');
    }

    static printResult(allCoachResults) {
        MissionUtils.Console.print(OUTPUT.RESULT);
        
        const days = ['구분', '월요일', '화요일', '수요일', '목요일', '금요일'];
        MissionUtils.Console.print(`[ ${days.join(' | ')} ]`);
        
        const categories = ['카테고리', ...allCoachResults[0].categories];
        MissionUtils.Console.print(`[ ${categories.join(' | ')} ]`);
        
        allCoachResults.forEach(result => {
            const row = [result.coach, ...result.menus];
            MissionUtils.Console.print(`[ ${row.join(' | ')} ]`);
        });
    }

    static printComplete() {
        MissionUtils.Console.print(OUTPUT.COMPLETE);
    }

    // WoowaError인 경우, 메시지만 출력. 그 외의 에러는 접두사와 함께 출력
    static printError(errorMessage) {
        if (errorMessage instanceof WoowaError) {
            MissionUtils.Console.print(errorMessage.message);
            return;
        }
        MissionUtils.Console.print(`${ERROR_PREFIX} ${errorMessage.message}`);
    }
}

export { Output };