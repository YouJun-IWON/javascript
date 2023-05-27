// history

// 브라우저 히스토리(세션 기록) 정보를 반환하거나 제어한다.

// .length : 등록된 히스토리 개수
// .scrollRestoration : 히스토리 탐색시 스크롤 위치 복원 여부 확인 및 지정
history.scrollRestoration = 'manual';
// 새로고침시 스크롤이 최상단으로 간다.
history.scrollRestoration = 'auto';
// 새로고침시 스크롤이 유지된다.
// .state : 현재 히스토리에 등록된 데이터(상태)

// .back(): 뒤로 가기
// .forward() : 앞으로 가기
// .go(위치) : 현재 페이지 기준 특정 히스토리 '위치'로 이동
// .go(-2) : 두번 뒤로가기를 누른 것과 같다.

// .pushState(상태, 제목, 주소): 히스토리에 상태 및 주소를 추가 및 이동 // 새로고침을 진행하지 않음
// .replaceState(상태, 제목, 주소) : 현재 히스토리의 상태 및 주소를 교체 및 이동 // 기존의 화면은 history에 기록하지 않게 된다. // 뒤로가기를 누르면 뒤로 2번 이동한 화면이 나오게 된다.
// > 모든 브라우저는 '제목' 옵션을 무시한다.

console.log(history);
history.pushState({ a: 1 }, '', '/#hello4');
history.pushState({ b: 2 }, '', '/#hello5');
