// About 버튼
const moreBtn = document.querySelector("#moreBtn");
const hidText = document.querySelector("#hidText");

moreBtn.addEventListener("click", function () {
    if (hidText.style.display === "block") {
        hidText.style.display = "none";
        moreBtn.textContent = "더 알아보기";
    } else {
        hidText.style.display = "block";
        moreBtn.textContent = "닫기";
    }
});



// Skills
const skills = [
    {
        name: "HTML",
        level: "기초",
        description: "웹 페이지의 구조 작성"
    },
    {
        name: "CSS",
        level: "기초",
        description: "웹 페이지의 디자인과 레이아웃 작성"
    },
    {
        name: "JavaScript",
        level: "학습 중",
        description: "웹 페이지에 동적 기능 추가"
    }
];
const skillList = document.querySelector("#skillList");

// Skills 생성 함수
function createSkills() {
    skillList.innerHTML = "";
    skills.forEach(function (skill) {
        const li = document.createElement("li");

        const name = document.createElement("strong");
        const level = document.createElement("span");
        const description = document.createElement("p");

        name.textContent = skill.name;
        level.textContent = skill.level;
        description.textContent = skill.description;

        if (skill.level === "학습 중") {
            level.classList.add("learning");
        } else {
            level.classList.add("basic");
        }

        li.appendChild(name);
        li.appendChild(level);
        li.appendChild(description);

        skillList.appendChild(li);
    });
}

createSkills();



// Projects Slider
// 프로젝트 추가 시 여기에서 프로젝트 추가하기

const projects = [
    {
        number: "PROJECT 01",
        title: "WebDemo Page",
        description: "2025년 3월 23일 웹프로그래밍 수업 중 제작",
        skill: "HTML/CSS/JavaScript",
        link: "https://web-programming-alpha.vercel.app/",
        github: "https://github.com/myyonop/WebDEMO"
    },
    {
        number: "PROJECT 02",
        title: "WEB PROTFOLIO - 1",
        description: "2025년 4월 23일 첫번째 포트폴리오 사이트 제작",
        skill: "HTML/CSS/JavaScript",
        link: "https://my-midterm.vercel.app/",
        github: "https://github.com/myyonop/midterm2025"
    },
    {
        number: "PROJECT 03",
        title: "WEB PROTFOLIO - 2",
        description: "2025년 6월 16일 두번째 포트폴리오 사이트 제작",
        skill: "HTML/CSS/JavaScript",
        link: "https://portfolio-psi-drab-14.vercel.app/",
        github: "https://github.com/myyonop/Portfolio"
    },
];

let currentProject = 0;

const pjtNumber = document.querySelector("#pjt-Number");
const pjtTitle = document.querySelector("#pjt-Title");
const pjtDescription = document.querySelector("#pjt-Description");
const pjtSkill = document.querySelector("#pjt-Skill");
const pjtLink = document.querySelector("#pjt-Link");
const gitLink = document.querySelector("#pjt-gitLink")
const prevBtn = document.querySelector("#prev-Btn");
const nextBtn = document.querySelector("#next-Btn");
const indicator = document.querySelector("#indicator");

function showProject() {
    const project = projects[currentProject];

    pjtNumber.textContent = project.number;
    pjtTitle.textContent = project.title;
    pjtDescription.textContent = project.description;
    pjtSkill.textContent = project.skill;
    pjtLink.href = project.link;
    gitLink.href = project.github;

    updateIndicator();
}

// 인디케이터 생성
function createIndicator() {
    indicator.innerHTML = "";

    for (
        let i = 0;
        i < projects.length;
        i++
    ) {
        const dot = document.createElement("span");
        if (i === currentProject) {
            dot.classList.add("active");
        }
        indicator.appendChild(dot);
    }
}

// 인디케이터 업데이트
function updateIndicator() {
    const dots = indicator.querySelectorAll("span");

    dots.forEach(function (dot, index) {
        if (index === currentProject) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });
}

prevBtn.addEventListener("click", function () {
    currentProject--;
    if (currentProject < 0) {
        currentProject = projects.length - 1;
    }
    showProject();
});

nextBtn.addEventListener("click", function () {
    currentProject++;
    if (currentProject >= projects.length) {
        currentProject = 0;
    }
    showProject();
});



// Study
const studyTopics = [

    // 01. 기초
    {
        category: "01. 기초",
        title: "HTML 기본 구조"
    },
    {
        category: "01. 기초",
        title: "Semantic Tag"
    },
    {
        category: "01. 기초",
        title: "Box Model"
    },
    {
        category: "01. 기초",
        title: "Flexbox"
    },
    {
        category: "01. 기초",
        title: "JavaScript 변수"
    },
    {
        category: "01. 기초",
        title: "Event"
    },
    {
        category: "01. 기초",
        title: "배열"
    },

    // 02. 현재 공부
    {
        category: "02. 현재 공부",
        title: "DOM 조작"
    },
    {
        category: "02. 현재 공부",
        title: "배열과 객체"
    },
    {
        category: "02. 현재 공부",
        title: "함수"
    },
    {
        category: "02. 현재 공부",
        title: "조건문과 반복문"
    },
    {
        category: "02. 현재 공부",
        title: "반응형 웹 디자인"
    }
];

const studyList = document.querySelector("#studyList");

function createStudyList() {
    studyList.innerHTML = "";
    
    // 카테고리별 데이터 묶기
    const categories = {};

    studyTopics.forEach(function (topic) {
        if (!categories[topic.category]) {
            categories[topic.category] = [];
        }
        categories[topic.category].push(topic);
    });

    for (const category in categories) {
        // 카테고리
        const categorySection = document.createElement("div");
        categorySection.classList.add("study-section");

        const categoryTitle = document.createElement("h3");
        categoryTitle.classList.add("study-category");
        categoryTitle.textContent = category;

        categorySection.appendChild(categoryTitle);

        // 공부
        const items = document.createElement("div");
        items.classList.add("study-items");

        categories[category].forEach(function (topic) {
            const item = document.createElement("div");
            item.classList.add("study-item");
            item.textContent = topic.title;

            items.appendChild(item);
        });

        categorySection.appendChild(items);
        studyList.appendChild(categorySection);
    }
}

createStudyList();



// Data Practice
const userInput = document.querySelector("#userInput");
const searchBtn = document.querySelector("#searchBtn");
const apiResult = document.querySelector("#api-result");
const jsonData = document.querySelector("#jsonData");

searchBtn.addEventListener("click", function () {
    const postNumber = userInput.value;

    if (postNumber === "") {
        apiResult.innerHTML = `
            <p class="error">
                게시글 번호를 입력해주세요. (1 ~ 100)
            </p>
        `;

        jsonData.textContent = "데이터가 없습니다.";

        return;
    }

    if (postNumber < 1 || postNumber > 100) {
        apiResult.innerHTML = `
            <p class="error">
                1부터 100 사이의 번호를 입력해주세요.
            </p>
        `;

        jsonData.textContent = "데이터가 없습니다.";

        return;
    }

    apiResult.innerHTML = `
        <p class="loading">
            데이터를 가져오는 중...
        </p>
    `;

    jsonData.textContent = "Loading...";

    // API 요청
    fetch(
        `https://jsonplaceholder.typicode.com/posts/${postNumber}`
    )
        // 서버 응답을 JSON으로 변환
        .then(function (response) {
            if (!response.ok) {
                throw new Error("데이터를 가져오지 못했습니다.");
            }
            return response.json();
        })

        // 데이터 사용
        .then(function (data) {
            console.log("JSON 데이터 : ", data);

            apiResult.innerHTML = `
                <span class="post-id">
                    POST ID : ${data.id}
                </span>
                <h3 class="post-title">
                    ${data.title}
                </h3>
                <p>
                    ${data.body}
                </p>
            `;

            // 원본 데이터 출력
            jsonData.textContent = JSON.stringify(data, null, 4);
        })

        // 오류 처리
        .catch(function (error) {
            console.error(error);

            apiResult.innerHTML = `
                <p class="error">
                    데이터를 가져오는 중 오류가 발생했습니다.
                </p>
            `;

            jsonData.textContent = "API 데이터를 가져오지 못했습니다.";
        });
});

// Enter로 검색
userInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        searchBtn.click();
    }
});


// 초기 실행 - 가장 하단에 위치
createIndicator();
showProject();