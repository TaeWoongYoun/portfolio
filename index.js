function toggleMenu() {
    document.getElementById('slide-menu').classList.toggle('active');
}

const bookData = {
    // ============================================
    // 1층: Individual Projects
    // ============================================
    'LMS': {
        left: `
            <h3>LMS 프로젝트 소개</h3>
            <p>기능반 후배들에게 학습했던 모든 것을 체계적으로 전수하기 위해 개발된 W-LMS는 종합적인 학습 관리 플랫폼입니다.</p>
            
            <h3>기술 스택</h3>
            <ul>
                <li><strong>Frontend:</strong> React</li>
                <li><strong>Backend:</strong> Node.js</li>
                <li><strong>Database:</strong> MySQL</li>
                <li><strong>Deploy:</strong> Railway</li>
            </ul>
            
            <h3>개발 기간</h3>
            <p>2024.12 ~ 2025.11</p>
        `,
        right: `
            <div class="project-image-frame">
                <img src="image/WLMS.png" alt="WLMS">
            </div>
            
            <h3>링크</h3>
            <p>
                <a href="https://github.com/TaeWoongYoun/LMS" target="_blank">GitHub Repository</a><br>
                <a href="https://lms-production-479d.up.railway.app/" target="_blank">Live Demo</a>
            </p>
            
            <h3>외부 활동</h3>
            <p>2025년 한양대학교 SW/ICT/AI 종합학술대회 참가</p>
        `,
        color: '#e58a7d',
        tag: 'INDIVIDUAL'
    },

    'KPI': {
        left: `
            <h3>KPI 프로젝트 소개</h3>
            <p>스마트제조 기업 A사의 생산 KPI 연계 프로젝트</p>
            
            <h3>기술 스택</h3>
            <ul>
                <li><strong>Frontend:</strong> HTML&CSS&JS</li>
                <li><strong>Backend:</strong> Spring</li>
                <li><strong>Database:</strong> MySQL</li>
            </ul>
            
            <h3>개발 기간</h3>
            <p>2025.12.31 ~ 2026.01.13</p>
        `,
        right: `
            <div class="project-image-frame">
                <img src="image/KPI.png" alt="KPI">
            </div>
            
            <h3>링크</h3>
            <p>
                <a href="https://github.com/TaeWoongYoun/KPI" target="_blank">GitHub Repository</a>
            </p>
            
            <h3>상세 내용</h3>
            <p>1학년 겨울계절학기 자바프로그래밍기초 실습</p>
        `,
        color: '#74a4bc',
        tag: 'INDIVIDUAL'
    },

    'Algorithm': {
        left: `
            <h3>Algorithm 프로젝트 소개</h3>
            <p>프로그래머스 알고리즘을 풀며 기록한 Repo입니다.</p>
            
            <h3>기술 스택</h3>
            <ul>
                <li><strong>Language:</strong> Python, Java, C</li>
                <li><strong>Platform:</strong> 프로그래머스</li>
            </ul>
            
            <h3>학습 기간</h3>
            <p>2024.01 ~</p>
        `,
        right: `
            <div class="project-image-frame">
                <img src="image/Algorithm.png" alt="Algorithm">
            </div>
            
            <h3>링크</h3>
            <p>
                <a href="https://github.com/TaeWoongYoun/programmers-algorithm" target="_blank">GitHub Repository</a>
            </p>
            
            <h3>상세 내용</h3>
            <p>일부 Python 코드는 (주)두나정보기술에서 코드리뷰를 하며 학습했습니다.</p>
        `,
        color: '#a8c69f',
        tag: 'INDIVIDUAL'
    },

    'AIX': {
        left: `
            <h3>AIX-R-Py 프로젝트 소개</h3>
            <p>AI+X:R-Py 컴퓨팅 수업에서 R과 Python을 활용한 프로젝트입니다.</p>
            
            <h3>기술 스택</h3>
            <ul>
                <li><strong>Language:</strong> R, Python</li>
                <li><strong>Library:</strong> Pandas, Matplotlib</li>
            </ul>
            
            <h3>개발 기간</h3>
            <p>2025.10 ~ 2025.12</p>
        `,
        right: `
            <div class="project-image-frame">
                <img src="image/AIX.png" alt="AIX">
            </div>
            
            <h3>링크</h3>
            <p>
                <a href="https://github.com/TaeWoongYoun/AIX-R-Py-Repo" target="_blank">GitHub Repository</a><br>
                <a href="https://taewoongyoun.github.io/AIX-R-Py-Repo/" target="_blank">Live Demo</a>
            </p>
            
            <h3>상세 내용</h3>
            <p>R과 Python을 학습한 학습 자료입니다.</p>
        `,
        color: '#b8a2c7',
        tag: 'INDIVIDUAL'
    },

    'Django': {
        left: `
            <h3>Django 프로젝트 소개</h3>
            <p>Django 프레임워크를 활용한 웹 개발 프로젝트입니다.</p>
            
            <h3>기술 스택</h3>
            <ul>
                <li><strong>Frontend:</strong> Django & Bootstrap</li>
                <li><strong>Database:</strong> SQLite</li>
            </ul>
            
            <h3>개발 기간</h3>
            <p>2025.09.20 ~ 2025.12.17</p>
        `,
        right: `
            <div class="project-image-frame">
                <img src="image/Django.png" alt="Django">
            </div>
            
            <h3>링크</h3>
            <p>
                <a href="https://github.com/TaeWoongYoun/DjangoProject" target="_blank">GitHub Repository</a>
            </p>
            
            <h3>상세 내용</h3>
            <p>1학년 2학기 웹프레임워크개발 수업 프로젝트</p>
        `,
        color: '#f2cc8f',
        tag: 'INDIVIDUAL'
    },

    'JSP': {
        left: `
            <h3>JSP 프로젝트 소개</h3>
            <p>정보처리산업기사 실기 준비를 위해 제작한 프로그램 모음입니다.</p>
            
            <h3>기술 스택</h3>
            <ul>
                <li><strong>Frontend:</strong> HTML&CSS</li>
                <li><strong>Backend:</strong> JSP</li>
                <li><strong>Database:</strong> Oracle</li>
            </ul>
            
            <h3>학습 기간</h3>
            <p>2024.09.01 ~ 2024.12.10</p>
        `,
        right: `
            <div class="project-image-frame">
                <img src="image/JSP.png" alt="JSP">
            </div>
            
            <h3>링크</h3>
            <p>
                <a href="https://github.com/TaeWoongYoun/IndustrialEngineer" target="_blank">GitHub Repository</a>
            </p>
            
            <h3>자격 사항</h3>
            <p>정보처리산업기사 취득: 2025.01</p>
        `,
        color: '#e58a7d',
        tag: 'INDIVIDUAL'
    },

    'Modbus': {
        left: `
            <h3>Modbus 프로젝트 소개</h3>
            <p>모드버스를 이용한 데이터 수집과 시각화 프로젝트입니다.</p>
            
            <h3>기술 스택</h3>
            <ul>
                <li><strong>Language:</strong> Python&JS&PHP</li>
                <li><strong>Protocol:</strong> Modbus</li>
                <li><strong>Hardware:</strong> Arduino</li>
            </ul>
            
            <h3>개발 기간</h3>
            <p>2024.08 ~ 2025.01</p>
        `,
        right: `
            <div class="project-image-frame">
                <img src="image/Modbus.png" alt="Modbus">
            </div>
            
            <h3>링크</h3>
            <p>
                <a href="https://github.com/TaeWoongYoun/modbus_project" target="_blank">GitHub Repository</a>
            </p>
            
            <h3>상세 내용</h3>
            <p>(주)두나정보기술에서 진행한 Modbus 과제</p>
        `,
        color: '#74a4bc',
        tag: 'INDIVIDUAL'
    },

    // ============================================
    // 2층: Team Projects
    // ============================================
    'K-Cluture Hub': {
        left: `
            <h3>K-Culture Hub 프로젝트 소개</h3>
            <p>한국 문화와 친해질 수 있는 카드 뒤집기 게임 및 AI 학습 퀴즈</p>
            
            <h3>기술 스택</h3>
            <ul>
                <li><strong>Frontend:</strong> TypeScript</li>
                <li><strong>Backend:</strong> Node.js</li>
                <li><strong>AI:</strong> Claude, Gemini</li>
            </ul>
            
            <h3>Team: 사차원 감자들</h3>
            <ul>
                <li><strong>최웅식:</strong> 기획 및 발표</li>
                <li><strong>제준혁:</strong> 프로그램 개발</li>
                <li><strong>윤태웅:</strong> PM 및 통합</li>
                <li><strong>최성우:</strong> 데이터셋 및 디자인</li>
            </ul>
        `,
        right: `
            <div class="project-image-frame">
                <img src="image/Progate.png" alt="Progate">
            </div>
            
            <h3>개발 기간</h3>
            <p>2025.11.01 ~ 2025.11.02 (24h)</p>
            
            <h3>링크</h3>
            <p>
                <a href="https://github.com/Four-potatoes/ProgateHackathon" target="_blank">GitHub Repository</a>
            </p>
        `,
        color: '#b8a2c7',
        tag: 'TEAM'
    },

    'dataAnalysis': {
        left: `
            <h3>CountingStars 프로젝트 소개</h3>
            <p>ChatGPT 이후 개발자 생태계 변화 데이터분석</p>
            
            <h3>기술 스택</h3>
            <ul>
                <li><strong>Language:</strong> Python, Pandas</li>
                <li><strong>Tools:</strong> Jupyter Notebook</li>
            </ul>
            
            <h3>Team: TeamCountingStars</h3>
            <ul>
                <li><strong>윤태웅:</strong> PM</li>
                <li><strong>원준서:</strong> Data Analyst</li>
                <li><strong>이라온:</strong> Data Engineer</li>
                <li><strong>송민찬:</strong> Data Collector</li>
            </ul>
        `,
        right: `
            <div class="project-image-frame">
                <img src="image/dataAnalysis.png" alt="dataAnalysis">
            </div>
            
            <h3>개발 기간</h3>
            <p>2025.11.03 ~ 2025.11.24</p>
            
            <h3>링크</h3>
            <p>
                <a href="https://github.com/TeamCountingStars/dataAnalysis" target="_blank">GitHub Repository</a><br>
                <a href="https://teamcountingstars.github.io/dataAnalysis/" target="_blank">Live Demo</a>
            </p>
        `,
        color: '#e58a7d',
        tag: 'TEAM'
    },

    'PatchAcquisition': {
        left: `
            <h3>Patch Acquisition Game</h3>
            <p>LEGO EV3 로봇을 활용한 패치 획득 게임</p>
            
            <h3>기술 스택</h3>
            <ul>
                <li><strong>Hardware:</strong> MINDSTORMS EV3</li>
                <li><strong>Language:</strong> RobotC</li>
            </ul>
            
            <h3>Team: EV3Team</h3>
            <ul>
                <li><strong>윤태웅:</strong> PM</li>
                <li><strong>박재형:</strong> 개발</li>
                <li><strong>이현빈:</strong> 개발</li>
                <li><strong>조민:</strong> PPT/발표</li>
                <li><strong>전민석:</strong> PPT/발표</li>
            </ul>
        `,
        right: `
            <div class="project-image-frame">
                <img src="image/PatchAcquisition.png" alt="PatchAcquisition">
            </div>
            
            <h3>개발 기간</h3>
            <p>2025.11.19 ~ 2025.12.10</p>
            
            <h3>링크</h3>
            <p>
                <a href="https://github.com/EV3Team/smart-sensors-assignments" target="_blank">GitHub Repository</a><br>
                <a href="https://ev3team.github.io/PatchAcquisitionGame/" target="_blank">Live Demo</a>
            </p>
        `,
        color: '#74a4bc',
        tag: 'TEAM'
    },

    'MCA': {
        left: `
            <h3>MCA 프로젝트 소개</h3>
            <p>YOLO11을 활용한 쇼핑 카트 상태 탐지 시스템</p>
            
            <h3>기술 스택</h3>
            <ul>
                <li><strong>Language:</strong> Python</li>
                <li><strong>Library:</strong> YOLO11, OpenCV</li>
            </ul>
            
            <h3>Team: ICT-Top-Bottom</h3>
            <ul>
                <li><strong>윤태웅</strong></li>
                <li><strong>박재형</strong></li>
            </ul>
        `,
        right: `
            <div class="project-image-frame">
                <img src="image/MCA.png" alt="MCA">
            </div>
            
            <h3>개발 기간</h3>
            <p>2025.11.05 ~ 2025.12.22</p>
            
            <h3>링크</h3>
            <p>
                <a href="https://github.com/ICT-Top-Bottom/MCA" target="_blank">GitHub Repository</a><br>
                <a href="https://ict-top-bottom.github.io/MCA/" target="_blank">Live Demo</a>
            </p>
        `,
        color: '#a8c69f',
        tag: 'TEAM'
    },

    'SuinBundang': {
        left: `
            <h3>SuinBundang 프로젝트 소개</h3>
            <p>수인분당선 노선을 HTML과 CSS로 만든 웹페이지</p>
            
            <h3>기술 스택</h3>
            <ul>
                <li><strong>Frontend:</strong> HTML&CSS</li>
            </ul>
            
            <h3>상세 내용</h3>
            <p>팀을 추억하기 위한 개인 프로젝트</p>
        `,
        right: `
            <div class="project-image-frame">
                <img src="image/Suin.png" alt="Suin">
            </div>
            
            <h3>개발 기간</h3>
            <p>2025.12.23 ~ 2025.12.26</p>
            
            <h3>링크</h3>
            <p>
                <a href="https://github.com/SuinBundang/SuinBundang" target="_blank">GitHub Repository</a><br>
                <a href="https://suinbundang.github.io/SuinBundang/" target="_blank">Live Demo</a>
            </p>
        `,
        color: '#f2cc8f',
        tag: 'TEAM'
    },

    'WAD': {
        left: `
            <h3>WAD 프로젝트 소개</h3>
            <p>이력서, 포트폴리오, 명함 템플릿 웹 애플리케이션</p>
            
            <h3>기술 스택</h3>
            <ul>
                <li><strong>Frontend:</strong> HTML&CSS&JS</li>
                <li><strong>Tool:</strong> Figma, Github</li>
            </ul>
            
            <h3>Team: HYU-DreamTeam</h3>
            <ul>
                <li><strong>박재형:</strong> Portfolio</li>
                <li><strong>윤태웅:</strong> Resume</li>
                <li><strong>원준서:</strong> Card</li>
                <li><strong>이주혜:</strong> Main</li>
            </ul>
        `,
        right: `
            <div class="project-image-frame">
                <img src="image/WebApplication.png" alt="WAD">
            </div>
            
            <h3>개발 기간</h3>
            <p>2025.12.23 ~ 2026.01.10</p>
            
            <h3>링크</h3>
            <p>
                <a href="https://github.com/HYU-DreamTeam/WebApplication" target="_blank">GitHub Repository</a><br>
                <a href="https://hyu-dreamteam.github.io/WAD-Demo/" target="_blank">Live Demo</a>
            </p>
        `,
        color: '#b8a2c7',
        tag: 'TEAM'
    },

    // ============================================
    // 3층: External Activities
    // ============================================
    'Cert': {
        left: `
            <h3>자격증</h3>
            <p>취득한 자격증입니다.</p>
            
            <h3>항목</h3>
            <ul>
                <li><strong>정보처리산업기사</strong></li>
                <li><strong>웹디자인개발기능사</strong></li>
                <li><strong>운전면허</strong></li>
            </ul>
        `,
        right: `
            <h3>정보처리산업기사</h3>
            <ul>
                <li><strong>취득일:</strong> 2025.01</li>
                <li><strong>발급기관:</strong> 한국산업인력공단</li>
            </ul>
            
            <h3>웹디자인개발기능사</h3>
            <ul>
                <li><strong>취득일:</strong> 2024.12</li>
                <li><strong>발급기관:</strong> 한국산업인력공단</li>
            </ul>
        `,
        color: '#f2cc8f',
        tag: 'ACTIVITY'
    },

    'Paper': {
        left: `
            <h3>논문 소개</h3>
            <p>AI 기반 사용자 맞춤형 공지사항 통합 알림 시스템</p>
            
            <h3>세부 사항</h3>
            <ul>
                <li><strong>학회:</strong> 한국정보과학회</li>
            </ul>
            
            <h3>작성 기간</h3>
            <p>2025.04 ~ 2025.07</p>
        `,
        right: `
            <div class="project-image-frame">
                <img src="image/Paper.png" alt="Paper">
            </div>
            
            <h3>링크</h3>
            <p>
                <a href="https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12318711" target="_blank">논문 링크</a>
            </p>
            
            <h3>상세 내용</h3>
            <p>1학년 1학기 프로그래밍설계방법론 과제</p>
        `,
        color: '#e58a7d',
        tag: 'ACTIVITY'
    },

    'Conference': {
        left: `
            <h3>WLMS 학술대회</h3>
            <p>게임화 기법을 활용한 웹 개발 학습 플랫폼</p>
            
            <h3>세부 사항</h3>
            <ul>
                <li><strong>학술대회:</strong> 한양대 SW/ICT/AI 종합학술대회</li>
                <li><strong>세션:</strong> 404 Not Found</li>
            </ul>
            
            <h3>개발 기간</h3>
            <p>2024.12 ~ 2025.11</p>
        `,
        right: `
            <div class="project-image-frame">
                <img src="image/Conference.png" alt="Conference">
            </div>
            
            <h3>링크</h3>
            <p>
                <a href="https://github.com/TaeWoongYoun/LMS" target="_blank">GitHub Repository</a>
            </p>
            
            <h3>상세 내용</h3>
            <p>LMS 프로젝트를 학술대회에서 발표</p>
        `,
        color: '#a8c69f',
        tag: 'ACTIVITY'
    },

    'SkillsCompetitions': {
        left: `
            <h3>Skills Competitions</h3>
            <p>웹디자인 및 개발 기능경기대회 입상 기록</p>
            
            <h3>기술 스택</h3>
            <ul>
                <li><strong>Frontend:</strong> HTML5, CSS3, JS</li>
                <li><strong>Backend:</strong> PHP</li>
                <li><strong>Database:</strong> MySQL</li>
            </ul>
            
            <h3>준비 기간</h3>
            <p>2023.08 ~ 2024.08</p>
        `,
        right: `
            <h3>인천기능경기대회</h3>
            <ul>
                <li><strong>Date:</strong> 2024.04</li>
                <li><strong>Award:</strong> 금메달</li>
            </ul>
            
            <h3>전국기능경기대회</h3>
            <ul>
                <li><strong>Date:</strong> 2024.08</li>
                <li><strong>Award:</strong> 장려상(11등)</li>
            </ul>
        `,
        color: '#b8a2c7',
        tag: 'ACTIVITY'
    },

    'HYAI': {
        left: `
            <h3>소개</h3>
            <p>한양대 ERICA 인공지능 학회 HYAI 활동</p>
            
            <h3>활동 내용</h3>
            <ul>
                <li><strong>알고리즘 스터디:</strong> 2025.04 ~ 2025.06</li>
                <li><strong>Python 스터디:</strong> 2025.04 ~ 2025.06</li>
                <li><strong>의료AI 스터디:</strong> 2025.10 ~ 2025.12</li>
            </ul>
        `,
        right: `
            <h3>알고리즘 스터디</h3>
            <p>프로그래머스 Python 문제 풀이</p>
            
            <h3>Python 스터디</h3>
            <p>Python 기초 문법과 실습</p>
            
            <h3>의료AI 스터디</h3>
            <p>뇌를 바꾼 공학 책 토론</p>
        `,
        color: '#74a4bc',
        tag: 'ACTIVITY'
    },

    'HYEND': {
        left: `
            <h3>소개</h3>
            <p>한양대 ERICA 웹개발 학회 HY-END 활동</p>
            
            <h3>활동 내용</h3>
            <ul>
                <li><strong>React 스터디:</strong> 2025.09 ~ 2025.12</li>
            </ul>
        `,
        right: `
            <h3>React 스터디</h3>
            <p>React 기초 문법과 학술대회 준비</p>
        `,
        color: '#e58a7d',
        tag: 'ACTIVITY'
    },

    'Lectures': {
        left: `
            <h3>소개</h3>
            <p>외부 강사 활동 내용입니다.</p>
            
            <h3>활동 내용</h3>
            <ul>
                <li><strong>전국기능경기대회 인천 강사:</strong> 2025.08</li>
                <li><strong>인평자동차고 멘토링:</strong> 2025.10</li>
            </ul>
        `,
        right: `
            <h3>전국기능경기대회 강사</h3>
            <p>수강생 전원 전국대회 입상</p>
            
            <h3>졸업생 멘토링</h3>
            <p>학생들의 진로 지도</p>
        `,
        color: '#74a4bc',
        tag: 'ACTIVITY'
    },
};

function openBook(id) {
    const data = bookData[id];
    if (!data) return;
    const modal = document.getElementById('bookModal');
    
    document.getElementById('modalBody').innerHTML = data.right;
    document.getElementById('modalTitleCover').innerText = id;
    document.getElementById('coverTag').innerText = data.tag;
    document.getElementById('modalCover').style.backgroundColor = data.color;
    document.getElementById('modalSummary').innerHTML = data.left;
    
    modal.style.display = 'flex';
    modal.offsetHeight;
    modal.classList.add('open');
}

function closeBook() {
    const modal = document.getElementById('bookModal');
    modal.classList.remove('open');
    setTimeout(() => { modal.style.display = 'none'; }, 1000);
}

document.getElementById('bookModal').addEventListener('click', function(e) {
    if (e.target === this) closeBook();
});

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(showToast, 3000);
});

function showToast() {
    const toast = document.createElement('div');
    toast.className = 'toast-message';
    toast.innerHTML = '<span class="toast-icon">📚</span><span class="toast-text">우측 책장에서 책을 클릭해주세요!</span><span class="toast-close" onclick="closeToast(this)">&times;</span>';
    document.body.appendChild(toast);
    setTimeout(() => { toast.classList.add('show'); }, 100);
    setTimeout(() => {
        if (toast.parentNode) {
            toast.classList.remove('show');
            setTimeout(() => {
                if (toast.parentNode) toast.parentNode.removeChild(toast);
            }, 400);
        }
    }, 5000);
}

function closeToast(closeBtn) {
    const toast = closeBtn.parentElement;
    toast.classList.remove('show');
    setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 400);
}