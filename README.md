# PORTFOLIO-01
HTML/CSS/JavaScript를 기반으로 제작한 데모 포트폴리오 웹페이지

> 📅 2026.09.08 ~ 2026.09.25
> 🛠️ HTML / CSS / JavaScript / JSON / API

---

## Project Overview
이 프로젝트는 웹 개발 기초 학습 과정에서 제작한 데모 포트폴리오 페이지입니다.

단순한 HTML 문서를 작성하는 것에서 시작하여 CSS를 이용한 디자인/레이아웃 적용, JavaScript를 통한 동적 기능 추가 방식으로 발전시켰습니다.

Skills, Projects, Study 데이터를 JSON 파일로 분리하여 관리하고,
`fetch()`를 이용한 JSON 데이터를 불러와 웹페이지에 동적으로 표시하도록 구성했습니다.

또한 외부 API인 JSONPlaceholder를 활용하여 사용자가 입력한 게시글 번호에 따라
JSON 데이터를 가져오고 화면에 출력하는 기능을 구현했습니다.

---

## Tech Stack
### Frontend
- HTML5
- CSS3
- JavaScript
- JSON
- Fetch API

### API
- JSONPlaceholder

### Development Tools
- Visual Studio Code
- Git/GitHub
- Browser Developer Tools
- Vercel

---

## Project Structure
```
portfolio-01/
│
├── index.html
├── style.css
├── script.js
│
├── data/
│   ├── skills.json
│   ├── projects.json
│   └── study.json
│
└── README.md
```

### `index.html`
웹 페이지의 전체적인 구조 담당
- Header
- About Me
- Skills
- Projects
- Study
- Data Practice
- Contact
- Footer

### `style.css`
웹 페이지의 디자인/레이아웃 담당
- 기본 스타일
- Section 디자인
- Skills 카드
- Projects Slider
- Study 레이아웃
- 버튼 스타일
- API 결과 영역
- 반응형 웹 디자인

### `script.js`
웹 페이지의 동적인 기능 담당
- About 버튼
- Skills JSON 데이터 처리
- Projects Slider
- Study 데이터 정렬
- 카테고리별 / 날짜별 Study 전환
- JSON 데이터 불러오기
- 외부 API 요청
- JSON 데이터 출력
- 사용자 입력 처리

### data/*.json
각각 Skills, Projects, Study 영역의 데이터 관리
```
JavaScript
    │
    ├── fetch()
    │
    ├── skills.json
    ├── projects.json
    └── study.json
```

---

## 실행 방법
```
git clone https://github.com/myyonop/portfolio-01.git
cd portfolio-01
```
**VS Code에서 `Live Server`를 이용하거나 Python을 통한 사용 권장**
```
python -m http.server 8000
http://localhost:8000
```

---

## Development History
**2026.09.10**
프로젝트 시작
- 포르폴리오 페이지 기획
- HTML 기본 구조 작성

**2026.09.12**
- CSS 학습 및 적용

**2026.09.14**
- JavaScript 적용

**2026.09.21**
- Study 영역 추가 및 데이터 구조화
- Skills 데이터 동적 출력

**2026.09.24**
JSON/API 학습
- `fetch()`, `JSON.stringify()` 학습 및 적용
- JSONPlaceholder API 연동 및 화면 출력

**2026.09.25**
- Study 영역 개선
- JavaScript 배열 → JSON 파일 분리
최종 완성