import { Input, Output } from "./views/index.js";
import { Menu } from "./models/index.js";
import { SAMPLE } from "./shared/index.js";

class App {
	async run() {
		// 1. 시작 문구 출력
		Output.printHeader();
		console.log(Object.values(SAMPLE));

		// 2. 코치 이름 입력
		const namesOfCoach = await Input.readNamesOfCoach();

		const menu = new Menu(namesOfCoach);
		const coachArray = menu.getCoachArray();
			// 구분자(,)로 구분돼있는지 체크 (ERROR)
			// 코치 이름이 2 <= ? <= 4인지 체크 (ERROR)
			// 코치 수가 2 <= ? <= 5인지 체크 (ERROR)
			// 코치 이름이 중복되는지 체크 (ERROR)

		// 3. 각 코치마다 못 먹는 메뉴 입력 (코치 수만큼 반복)

		const sampleMenu = menu.getSampleMenu();

		for (let name of coachArray) {
			const cannotEatMenu = await Input.readCannotEatMenu(name);
			const cannotEatMenuArray = menu.getCannotEatMenu(cannotEatMenu);
		}
			// 비어있으면 못 먹는 음식 없는 거로 하기
			// 구분자(,)로 구분돼있는지 체크 (ERROR)
			// 구분된 음식 개수가 0 <= ? <= 2인지 체크 (ERROR)
			// 구분된 음식이 실제 있는 음식인지 체크 (ERROR)
		
		// 4. 각 코치마다 못 먹는 메뉴 제외한 메뉴 추천하기 (월~금)
			// 카테고리가 3회 이상 겹치는지 체크 (ERROR)
			// 중복된 음식이 있는지 체크 (ERROR)

		// 5. 결과 출력하기
	}
}

export default App;
