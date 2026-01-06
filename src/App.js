const SAMPLE = {
	일식: '규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼',
	한식: '김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음',
	중식: '깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채',
	아시안:
		'팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜',
	양식: '라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니',
};

import { Input, Output } from "./views/index.js";
import { Menu } from "./models/index.js";

class App {
	async run() {
		// 1. 시작 문구 출력
		Output.printHeader();

		// 2. 코치 이름 입력
		const namesOfCoach = await Input.readNamesOfCoach();

		const menu = new Menu(namesOfCoach);
		const coachArray = menu.getCoachArray();
			// 구분자(,)로 구분돼있는지 체크 (ERROR)
			// 코치 이름이 2 <= ? <= 4인지 체크 (ERROR)
			// 코치 수가 2 <= ? <= 5인지 체크 (ERROR)
			// 코치 이름이 중복되는지 체크 (ERROR)

		// 3. 각 코치마다 못 먹는 메뉴 입력 (코치 수만큼 반복)
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
