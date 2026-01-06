import { MissionUtils } from "@woowacourse/mission-utils";

class Output {
    constructor() {
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