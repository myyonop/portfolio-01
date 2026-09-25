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
const skillList = document.querySelector("#skillList");

// Skills 생성 함수
function createSkills(skills) {
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



// Projects Slider

let projects = [];

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
    if (projects.length === 0){
        return;
    }

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

const studyList = document.querySelector("#studyList");

const categoryBtn = document.querySelector("#categoryBtn");
const dateBtn = document.querySelector("#dateBtn");

let studyTopics = [];

// 항목 생성
function createStudyItem(topic, showCategory = false) {
    const item = document.createElement("div");
    item.classList.add("study-item");

    // 날짜별 화면에서는 카테고리 표시
    if (showCategory) {
        const category = document.createElement("span");
        category.classList.add("study-item-category");
        category.textContent = topic.category;
        item.appendChild(category);
    }
    const title = document.createElement("strong");
    title.classList.add("study-title");
    title.textContent = topic.title;

    const description = document.createElement("p");
    description.classList.add("study-description");
    description.textContent = topic.description;

    item.appendChild(title);
    item.appendChild(description);

    return item;
}

// 카테고리별 보기
function createCategoryView() {
    studyList.innerHTML = "";
    const categories = {};

    // 날짜별 데이터 묶기
    studyTopics.forEach(function (topic) {
        if (!categories[topic.category]) {
            categories[topic.category] = {};
        }
        if (!categories[topic.category][topic.date]) {
            categories[topic.category][topic.date] = [];
        }
        categories[topic.category][topic.date].push(topic);
    });

    // 카테고리 출력
    Object.keys(categories).forEach(function (category) {
        const categorySection = document.createElement("div");
        categorySection.classList.add("study-section");

        const categoryTitle = document.createElement("h3");
        categoryTitle.classList.add("study-category");
        categoryTitle.textContent = category;
        categorySection.appendChild(categoryTitle);

        Object.keys(categories[category]).forEach(
            function (date) {
                const items = document.createElement("div");
                items.classList.add("study-items");

                categories[category][date].forEach(
                    function (topic) {
                        const item = createStudyItem(topic);
                        items.appendChild(item);
                    }
                );
                categorySection.appendChild(items);
            }
        );
        studyList.appendChild(categorySection);
    });
}

// 날짜별 보기
function createDateView() {
    studyList.innerHTML = "";
    const dates = {};

    // 날짜별 데이터 묶기
    studyTopics.forEach(function (topic) {
        if (!dates[topic.date]) {
            dates[topic.date] = [];
        }
        dates[topic.date].push(topic);
    });

    // 날짜 출력
    Object.keys(dates).forEach(function (date) {
        const dateSection = document.createElement("div");
        dateSection.classList.add("study-date-section");

        const dateTitle = document.createElement("h3");
        dateTitle.classList.add("study-date-title");
        dateTitle.textContent = date.replaceAll("-", ".");
        dateSection.appendChild(dateTitle);

        const items = document.createElement("div");
        items.classList.add("study-items");

        dates[date].forEach(function (topic) {
            const item = createStudyItem(topic, true);
            items.appendChild(item);
        });
        dateSection.appendChild(items);
        studyList.appendChild(dateSection);
    });
}

// 버튼 상태 변경
function setActiveButton(button) {
    categoryBtn.classList.remove("active");
    dateBtn.classList.remove("active");
    button.classList.add("active");
}

categoryBtn.addEventListener("click", function () {
        console.log("카테고리별 버튼 클릭");
        setActiveButton(categoryBtn);
        createCategoryView();
    }
);

dateBtn.addEventListener("click", function () {
        console.log("날짜별 버튼 클릭");
        setActiveButton(dateBtn);
        createDateView();
    }
);



// JSON 데이터 불러오기
async function loadPortfolioData() {
    try {
        // Skills
        const skillsResponse = await fetch("./data/skills.json");

        if (!skillsResponse.ok) {
            throw new Error(
                "skills.json을 불러오지 못했습니다."
            );
        }

        const skills = await skillsResponse.json();
        createSkills(skills);

        // Projects
        const projectsResponse = await fetch("./data/projects.json");

        if (!projectsResponse.ok) {
            throw new Error(
                "projects.json을 불러오지 못했습니다."
            );
        }

        projects = await projectsResponse.json();
        createIndicator();
        showProject();

        // Study
        const studyResponse =
        await fetch("./data/study.json");


        if (!studyResponse.ok) {

            throw new Error(
                "study.json을 불러오지 못했습니다."
            );

        }


        studyTopics =
            await studyResponse.json();


        // 처음에는 카테고리별 표시

        setActiveButton(categoryBtn);
        createCategoryView();
    } catch (error) {
        console.error("JSON 데이터를 불러오는 중 오류 발생 : ", error);

        skillList.innerHTML = `
            <p class="error">
                Skills 데이터를 불러오지 못했습니다.
            </p>
        `;

        studyList.innerHTML = `
            <p class="error">
                Study 데이터를 불러오지 못했습니다.
            </p>
        `;
    }
}

loadPortfolioData();


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