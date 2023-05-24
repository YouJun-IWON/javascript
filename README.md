npm init으로 시작

npm init -y 로 하면 바로 시작됨 (기본적인 질문 skip)

npm install lodash (배포용)
npm install --save-dev parcel = npm install -D parcel (개발용)

package-lock.json : 추가적으로 설치한 페키지들의 관계
package.json : 내가 설치한 페키지들의 관계

=> package.json 수정 (
"scripts": {
"dev": "parcel ./index.html"
},
)

npm run dev => dist 라는 폴더를 만들어서 그 안에 있는 내용을 실행시킨다.

=> package.json 수정 (
"scripts": {
"dev": "parcel ./index.html",
"build": "parcel build ./index.html"
},
)

npm run build => 배포용으로 실행

=> package.json 수정 (
"main": "index.js", 제거
)

dist 폴더에 새로운 파일이 추가됨
