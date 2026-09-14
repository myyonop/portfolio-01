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

// Projects Slider
// 프로젝트 추가 시 여기에서 프로젝트 추가하기

const projects = [
    {
        number: "PROJECT 01",
        title: "WebDemo Page",
        description: "2025년 3월 23일 웹프로그래밍 수업 중 제작",
        skill: "HTML/CSS/JavaScript",
        link: "https://web-programming-alpha.vercel.app/"
    },
    {
        number: "PROJECT 02",
        title: "WEB PROTFOLIO - 1",
        description: "2025년 4월 23일 첫번째 포트폴리오 사이트 제작",
        skill: "HTML/CSS/JavaScript",
        link: "https://my-midterm.vercel.app/"
    },
    {
        number: "PROJECT 03",
        title: "WEB PROTFOLIO - 2",
        description: "2025년 6월 16일 두번째 포트폴리오 사이트 제작",
        skill: "HTML/CSS/JavaScript",
        link: "https://portfolio-psi-drab-14.vercel.app/"
    },
];

let currentProject = 0;

const pjtNumber = document.querySelector("#pjt-Number");
const pjtTitle = document.querySelector("#pjt-Title");
const pjtDescription = document.querySelector("#pjt-Description");
const pjtSkill = document.querySelector("#pjt-Skill");
const pjtLink = document.querySelector("#pjt-Link");
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

// 초기 실행
createIndicator();
showProject();