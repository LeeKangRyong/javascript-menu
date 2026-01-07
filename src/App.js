import { Input, Output } from "./views/index.js";
import { Menu } from "./models/index.js";
import { SAMPLE } from "./shared/index.js";
import { RecommendService } from "./services/index.js";

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
		const allCoachResults = [];

		for (let name of coachArray) {
			const cannotEatMenu = await Input.readCannotEatMenu(name);
			const cannotEatMenuArray = menu.getCannotEatMenu(cannotEatMenu);

			const recommendService = new RecommendService(name, cannotEatMenuArray);
			const weekResult = recommendService.recommendWeekMenu();

			allCoachResults.push(weekResult);
		}

		console.log(allCoachResults);
			// 비어있으면 못 먹는 음식 없는 거로 하기
			// 구분자(,)로 구분돼있는지 체크 (ERROR)
			// 구분된 음식 개수가 0 <= ? <= 2인지 체크 (ERROR)
			// 구분된 음식이 실제 있는 음식인지 체크 (ERROR)
		
		// 4. 각 코치마다 메뉴 추천하기 (월~금)
			// 못 먹는 음식 제외하기

			// 5회 반복
				// 카테고리 선택
				// 음식 선택
				// 배열에 넣기

				// 현재 배열에서 
					// 한 카테고리에 대한 음식이 3개 이상 있으면 다시 5회 반복으로 돌아가기
					// 중복된 메뉴 있으면 다시 5회 반복으로 돌아가기

			// 중복된 음식이 있는지 체크 (ERROR)
			// 한 카테고리에 대한 음식이 3개 이상 있는지 체크 (ERROR)

		// 5. 결과 출력하기
		Output.printResult();
		Output.printSpace();
		Output.printComplete();
	}
}

export default App;
