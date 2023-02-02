## 블록 오디세이 제출 과제 홍주완
#프로젝트 실행방법
```
git clone https://github.com/vjvl95/frontendtest
cd frontedtest
npm install
npm start
```

# 사용 가능 라이브러리
- React v17 / v18 (Use React hooks, no class component)
- react-query v4
- redux-toolkit 

# 안내사항
- 자바스크립트 와 타입스크립트를 통해서 구현하여야 한다.
- HTML 과 CSS가 허용된다. 다른 CSS UI라이브러리는 사용이 금지된다(bootstrap, material-ui, tailwindcss and styled-components)
- 상태관리 라이브러리로는 redux-toolkit을 사용한다
- redux-persist 와 localStorage 사용을 금지한다.

# 요구 사항
## 리스트 요구사항
- [x] 새로고침 한 후에도 리스트가 유지되어야 한다.
- [x] 리스트의 컬럼은 [상품번호, 상품명, 브랜드, 상품내용, 가격, 평점, 재고] 순이다.
- [x] 총 리스트의 갯수를 명시하여야 한다.
- [x] 상품내용의 글자수는 40글자로 제한한다. 40글자가 넘는경우 ... 을 붙인다

## 검색 요구 사항
- [x] 검색의 조건의 [전체,상풍명,브랜드,상품내용] 이다.
- [x] 검색 조건과 검색키워드는 새로고침 후에도 계속 유지 되어야 한다.

## 페이지 네이션 요구 사항
- [x] 페이지 마다 나올 리스트 갯수를 정할 수 있어야 한다.[10,20,50]
- [x] 페이지 마다 보여줄 리스트 갯수와 페이지 번호는 새로고침 후에도 계속 유지가 되어야 한다.

## 동작 동영상

- [x] 페이지 네이션 요구 사항 영상


https://user-images.githubusercontent.com/62174495/216211062-71c520d4-c7b1-498b-9a76-49aec8ebeecc.mp4

- [x] 검색 요구 사항 영상


https://user-images.githubusercontent.com/62174495/216211355-34c9d3c8-ce18-45c0-8119-faf6b80ca571.mp4

- [x] 전체 동작 영상


https://user-images.githubusercontent.com/62174495/216211637-8bb877bc-941f-44b2-88de-832fcaf07ccf.mp4

### 커밋 컨벤션

[feat] 기능 및 코드 추가<br/>
[fix] 버그 수정<br/>
[refactor] 코드 리팩토링<br/>
[style] UI/스타일 파일 추가/수정<br/>
