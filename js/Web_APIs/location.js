// Location

// 현재 페이지 정보를 반환하거나 제어한다.

// .herf: 전체 URL 주소
// .protocol: 프로토콜
// .hostname: 도메인 이름
// .pathname: 도메인 이후 경로
// .host: 포트 번호를 포함한 도메인 이름
// .port: 포트 번호
// .hash: 해시 정보 (페이지의 ID)

// .assign(주소) : 해당 '주소'로 페이지 이동
// .replace(주소) : 해당 '주소'로 페이지 이동, 현재 페이지 히스토리 제거
// .reload(강력): 페이지 새로고침, 'true' 인수는 '강력' 새로고침

console.log(location);
location.assign('/xyz'); // 페이지 이동에 관한 정보가 다 저장됨
location.replace('/xyz'); // 페이지 이동에 관한 정보가 초기화됨
location.reload(true); // true 가 없으면 일반 새로고침
