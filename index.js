function toggleMenu() {
    document.getElementById('slide-menu').classList.toggle('active');
}

const bookData = {
    // ============================================
    // 1층: 개인 프로젝트 (Individual Projects)
    // ============================================
    'LMS': {
        left: `
            <h3>LMS 프로젝트 소개</h3>
            <p>기능반 후배들에게 학습했던 모든 것을 체계적으로 전수하기 위해 개발된 W-LMS는 종합적인 학습 관리 플랫폼입니다. 과제 제출, GitHub 연동, 게시판 기능 등 동아리 활동에 최적화된 기능들을 제공합니다.</p>
            
            <h3>기술 스택</h3>
            <ul>
                <li><strong>Frontend: React</strong> </li>
                <li><strong>Backend: Node.js</strong> </li>
                <li><strong>Database: MySQL</strong> </li>
                <li><strong>Deploy: Railway</strong> </li>
            </ul>
            
            <h3>링크</h3>
            <p>
                <a href="https://github.com/TaeWoongYoun/LMS">GitHub Repository</a><br>
                <a href="https://lms-production-479d.up.railway.app/" target="_blank">Live Demo</a>
            </p>
        `,
        right: `
            <div class="project-image-frame">
                <img src="image/WLMS.png" alt="WLMS">
            </div>
            
            <h3>개발 기간</h3>
            <p>2024.12 ~ 2025.11</p>

            
            <h3>외부 활동</h3>
            <p>2025년 한양대학교 SW/ICT/AI 종합학술대회 참가: 404 Not Found Session</p>
        `,
        color: '#e58a7d', tag: 'INDIVIDUAL'
    },
    
    'KPI': {
        left: `
            <h3>KPI 프로젝트 소개</h3>
            <p>가상의 스마트제조 기업 A사의 생산 KPI 연계 프로젝트 : <br>스마트팩토리 솔루션 공급사의 프로그래머로 스마트팩토리 솔루션 도입기업의 생산 KPI 데이터를 "스마트제조 KPI 연계 시스템"에 전송하는 스케쥴러 프로그램을 개발한다.</p>
            
            <h3>기술 스택</h3>
            <ul>
                <li><strong>Frontend:HTML&CSS&JS</strong> </li>
                <li><strong>Backend:Spring</strong> </li>
                <li><strong>Database:MySQL</strong> </li>
            </ul>
            
            <h3>링크</h3>
            <p>
                <a href="https://github.com/TaeWoongYoun/KPI" target="_blank">GitHub Repository</a><br>
            </p>
        `,
        right: `
            <div class="project-image-frame">
                <img src="image/KPI.png" alt="KPI">
            </div>
            
            <h3>개발 기간</h3>
            <p>2025.12.31 ~ 2026.01.13</p>
            
            <h3>상세 내용</h3>
            <p>1학년 겨울계절학기 자바프로그래밍기초 실습 자료.</p>
        `,
        color: '#74a4bc', tag: 'INDIVIDUAL'
    },
    
    'Algorithm': {
        left: `
            <h3>programmers-algorithm 프로젝트 소개</h3>
            <p>프로그래머스 알고리즘을 풀며 기록한 Repo입니다. Python을 위주로 학습하였으며 Java와 C언어를 함께 학습했습니다.</p>
            
            <h3>기술 스택</h3>
            <ul>
                <li><strong>Language: Python, Java, C</strong> </li>
                <li><strong>Platform: 프로그래머스</strong> </li>
            </ul>
            
            <h3>링크</h3>
            <p>
                <a href="https://github.com/TaeWoongYoun/programmers-algorithm" target="_blank">GitHub Repository</a>
            </p>
        `,
        right: `
            <div class="project-image-frame">
                <img src="image/Algorithm.png" alt="Algorithm">
            </div>
            
            <h3>학습 기간</h3>
            <p>2024.01 ~ </p>
            
            <h3>상세 내용</h3>
            <p>일부 Python 코드는 (주)두나정보기술에서 코드리뷰를 하며 학습했습니다.</p>
        `,
        color: '#a8c69f', tag: 'INDIVIDUAL'
    },
    
    'AIX': {
        left: `
            <h3>AIX-R-Py 프로젝트 소개</h3>
            <p>AI+X:R-Py 컴퓨팅 수업에서 R과 Python을 활용한 프로젝트입니다. 본 연구는 2022년 11월 ChatGPT 출시 이후 소프트웨어 개발 생태계의 변화를 실제 데이터를 통해 정량적으로 분석합니다. GitHub AI 레포지토리 185만 개와 Stack Overflow 질문 데이터를 기반으로, ChatGPT 출시 전후의 개발자 행동 패턴 변화를 통계적으로 검증합니다.</p>
            
            <h3>기술 스택</h3>
            <ul>
                <li><strong>Language:</strong> R, Python</li>
                <li><strong>Library:</strong> Pandas, Matplotlib, Numpy</li>
                <li><strong>Tool:</strong> Google Colab</li>
            </ul>
            
            <h3>링크</h3>
            <p>
                <a href="https://github.com/TaeWoongYoun/AIX-R-Py-Repo" target="_blank">GitHub Repository</a> <br>
                <a href="https://taewoongyoun.github.io/AIX-R-Py-Repo/" target="_blank">Live Demo</a>
            </p>
        `,
        right: `
            <div class="project-image-frame">
                <img src="image/AIX.png" alt="AIX">
            </div>
            
            <h3>개발 기간</h3>
            <p>2025.10 ~ 2025.12</p>
            
            <h3>상세 내용</h3>
            <p>R과 Python을 학습한 학습 자료와 이를 응용하여 프로젝트를 진행한 내용을 기록했습니다.</p>
        `,
        color: '#b8a2c7', tag: 'INDIVIDUAL'
    },
    
    'Django': {
        left: `
            <h3>Django 프로젝트 소개</h3>
            <p>Django 프레임워크를 활용한 웹 개발 프로젝트입니다. 게시판 CRUD, 로그인, 회원가입, 페이지네이션 등의 기능을 제작하였으며 Bootstrap을 사용하여 UI를 구성했습니다.</p>
            
            <h3>기술 스택</h3>
            <ul>
                <li><strong>Frontend: </strong> Django & Bootstrap</li>
                <li><strong>Database:</strong> SQLite</li>
            </ul>
            
            <h3>링크</h3>
            <p>
                <a href="https://github.com/TaeWoongYoun/DjangoProject" target="_blank">GitHub Repository</a>
            </p>
        `,
        right: `
            <div class="project-image-frame">
                <img src="image/Django.png" alt="Django">
            </div>
            
            <h3>개발 기간</h3>
            <p>2025.09.20 ~ 2025.12.17</p>
            
            <h3>상세 내용</h3>
            <p>1학년 2학기 웹프레임워크개발 수업시간에 진행된 프로젝트입니다.</p>
        `,
        color: '#f2cc8f', tag: 'INDIVIDUAL'
    },
    
    'JSP': {
        left: `
            <h3>JSP 프로젝트 소개</h3>
            <p>이 프로젝트는 정보처리산업기사 실기 시험 준비를 위해 JSP와 Oracle을 활용하여 제작한 다양한 관리 프로그램 모음입니다. 각 프로그램은 select, insert, update 등의 데이터베이스 관리 기능을 포함하며, 주제에 맞춘 관리 시스템을 구축하는 연습을 목적으로 했습니다.</p>
            
            <h3>기술 스택</h3>
            <ul>
                <li><strong>Frontend:</strong> HTML&CSS</li>
                <li><strong>Backend:</strong> JSP</li>
                <li><strong>Database:</strong> Oracle</li>
            </ul>
            
            <h3>링크</h3>
            <p>
                <a href="https://github.com/TaeWoongYoun/IndustrialEngineer" target="_blank">GitHub Repository</a>
            </p>
        `,
        right: `
            <div class="project-image-frame">
                <img src="image/JSP.png" alt="IE">
            </div>
            
            <h3>학습 기간</h3>
            <p>2024.09.01 ~ 2024.12.10</p>
            
            <h3>자격 사항</h3>
            <p>정보처리산업기사 취득 : 2025.01</p>
        `,
        color: '#e58a7d', tag: 'INDIVIDUAL'
    },
    
    'Modbus': {
        left: `
            <h3>Modbus 프로젝트 소개</h3>
            <p>modbus_project는 모드버스를 이용한 데이터 수집과 시각화를 목적으로 하며 웹 인터페이스를 통해 데이터를 실시간으로 모니터링할 수 있습니다.</p>
            
            <h3>기술 스택</h3>
            <ul>
                <li><strong>Language:</strong> Python&JS&PHP</li>
                <li><strong>Protocol:</strong> Modbus</li>
                <li><strong>Hardware:</strong> Arduino</li>
            </ul>
            
            <h3>링크</h3>
            <p>
                <a href="https://github.com/TaeWoongYoun/modbus_project" target="_blank">GitHub Repository</a>
            </p>
        `,
        right: `
            <div class="project-image-frame">
                <img src="image/Modbus.png" alt="Modbus">
            </div>
            
            <h3>개발 기간</h3>
            <p>2024.08 ~ 2025.01</p>
            
            <h3>상세 내용</h3>
            <p>(주)두나정보기술에서 진행한 Modbus 과제를 JS와 PHP를 사용해 시각화를 진행했던 개인 프로젝트입니다.</p>
        `,
        color: '#74a4bc', tag: 'INDIVIDUAL'
    },

    // ============================================
    // 2층: 팀 프로젝트 (Team Projects)
    // ============================================
    'K-Cluture Hub': {
        left: `
            <h3>K-Cluture Hub 프로젝트 소개</h3>
            <p>한국 문화와 친해질 수 있는 카드 뒤집기 게임 및 AI 학습 퀴즈 구현 (K-Cluture & AI 학습 접목)</p>
            
            <h3>기술 스택</h3>
            <ul>
                <li><strong>Frontend:</strong> TypeScirpt</li>
                <li><strong>Backend:</strong> Node.js</li>
                <li><strong>Database:</strong> MySQL</li>
                <li><strong>AI:</strong> Claude, Gemini</li>
            </ul>

            <h3>개발 기간</h3>
            <p>2025.11.01 ~ 2025.11.02 (24h)</p>
            
            <h3>링크</h3>
            <p>
                <a href="https://github.com/Four-potatoes/ProgateHackathon" target="_blank">GitHub Repository</a>
            </p>
        `,
        right: `
            <div class="project-image-frame">
                <img src="image/Progate.png" alt="Progate">
            </div>
            
            <h3>Team : 사차원 감자들</h3>
            <ul>
                <li><strong>최웅식 : </strong> 기획 및 발표 담당</li>
                <li><strong>제준혁 : </strong> 프로그램 기능 및 개발 담당</li>
                <li><strong>윤태웅 : </strong> PM 및 프로그램 통합 담당</li>
                <li><strong>최성우 : </strong> 데이터셋 구성 및 디자인 담당</li>
            </ul>
        `,
        color: '#b8a2c7', tag: 'TEAM'
    },
    
    'dataAnalysis': {
        left: `
            <h3>CountingStars 프로젝트 소개</h3>
            <p>빅데이터활용사례를통한이해 과목의 팀 프로젝트로 ChatGPT와 Vibe Coding 이후, 개발자 생태계는 어떻게 변했는가? 라는 의문으로 데이터분석 프로젝트를 진행했습니다.</p>
            
            <h3>기술 스택</h3>
            <ul>
                <li><strong>Language:</strong> Python, Pandas, Prophet, Matplotlib</li>
                <li><strong>Tools:</strong> Github, Jupyter Notebook</li>
            </ul>

            <h3>개발 기간</h3>
            <p>2025.11.03 ~ 2025.11.24</p>
            
            <h3>링크</h3>
            <p>
                <a href="https://github.com/EV3Team/PatchAcquisitionGame" target="_blank">GitHub Repository</a> <br>
                <a href="https://teamcountingstars.github.io/dataAnalysis/" target="_blank">Live Demo</a>
            </p>
        `,
        right: `
            <div class="project-image-frame">
                <img src="image/dataAnalysis.png" alt="Patch">
            </div>

            <h3>Team : TeamCountingStars</h3>
            <ul>
                <li><strong>윤태웅 : </strong> PM(프로젝트 관리, 보고서 작성)</li>
                <li><strong>원준서 : </strong> Data Analyst(데이터 분석, 데이터 시각화)</li>
                <li><strong>이라온 : </strong> Data Engineer(Stackoverflow 데이터 수집, 전처리)</li>
                <li><strong>송민찬 : </strong> Data Collector(Github 데이터 수집)</li>
            </ul>
        `,
        color: '#e58a7d', tag: 'TEAM'
    },
    
    'PatchAcquisition': {
        left: `
            <h3>Patch Acquisition Game 프로젝트 소개</h3>
            <p>본 프로젝트는 스마트센서와액츄에이터 팀 프로젝트로 LEGO EV3 로봇을 활용하여 격자 구조의 맵에서 패치를 획득하며 최고 점수를 달성하는 것을 목표로 합니다. 두 가지 과제로 구성되어 있으며 각각 최단경로 알고리즘과 자유경로 최적화 전략을 구현합니다.</p>
            
            <h3>기술 스택</h3>
            <ul>
                <li><strong>Hardware:</strong> MINDSTORMS EV3</li>
                <li><strong>Language:</strong> RobotC</li>
            </ul>

            <h3>개발 기간</h3>
            <p>2025.11.19 ~ 2025.12.10</p>
            
            <h3>링크</h3>
            <p>
                <a href="https://github.com/EV3Team/smart-sensors-assignments" target="_blank">GitHub Repository</a> <br>
                <a href="https://ev3team.github.io/PatchAcquisitionGame/" target="_blank">Live Demo</a>
            </p>
        `,
        right: `
            <div class="project-image-frame">
                <img src="image/PatchAcquisition.png" alt="PatchAcquisition">
            </div>

            <h3>Team : EV3Team</h3>
            <ul>
                <li><strong>윤태웅 : </strong> PM</li>
                <li><strong>박재형 : </strong> 프로젝트 개발</li>
                <li><strong>이현빈 : </strong> 프로젝트 개발</li>
                <li><strong>조 민 : </strong> PPT 제작 및 발표</li>
                <li><strong>전민석 : </strong> PPT 제작 및 발표</li>
            </ul>
        `,
        color: '#74a4bc', tag: 'TEAM'
    },
    
    'MCA': {
        left: `
            <h3>MCA프로젝트 소개</h3>
            <p>본 프로젝트는 YOLO11 딥러닝 모델을 활용하여 CCTV 환경에서 쇼핑 카트의 상태(fully/empty/combined)를 자동으로 탐지하고 분류하는 실시간 시스템입니다. Instance Segmentation 기술을 통해 카트의 정밀한 윤곽선 정보까지 제공하며, 고해상도 처리로 원거리 객체 탐지 능력을 향상시켰습니다.</p>
            
            <h3>기술 스택</h3>
            <ul>
                <li><strong>Language:</strong> Python</li>
                <li><strong>Library:</strong> YOLO11, OpenCV, PyTorch</li>
                <li><strong>Tool:</strong> Kaggle, Roboflow</li>
            </ul>
            
            <h3>링크</h3>
            <p>
                <a href="https://github.com/ICT-Top-Bottom/MCA" target="_blank">GitHub Repository</a> <br>
                <a href="https://github.com/ICT-Top-Bottom/MCA-Appendix" target="_blank">MCA Appendix</a> <br>
                <a href="https://ict-top-bottom.github.io/MCA/" target="_blank">Live Demo</a>
            </p>
        `,
        right: `
            <div class="project-image-frame">
                <img src="image/MCA.png" alt="MCA">
            </div>
            
            <h3>개발 기간</h3>
            <p>2025.11.05 ~ 2025.12.22</p>
            
            <h3>Team : ICT-Top-Bottom</h3>
            <ul>
                <li><strong>윤태웅</strong></li>
                <li><strong>박재형</strong></li>
            </ul>
        `,
        color: '#a8c69f', tag: 'TEAM'
    },
    
    'SuinBundang': {
        left: `
            <h3>SuinBundang 프로젝트 소개</h3>
            <p>웹애플리케이션개발 팀 프로젝트로 진행될 뻔 했던 프로젝트. 수인분당선 노선을 html과 css로만 만든 웹페이지 제작</p>
            
            <h3>기술 스택</h3>
            <ul>
                <li><strong>Frontend:</strong> HTML&CSS</li>
            </ul>
            
            <h3>링크</h3>
            <p>
                <a href="https://github.com/SuinBundang/SuinBundang" target="_blank">GitHub Repository</a> <br>
                <a href="https://suinbundang.github.io/SuinBundang/" target="_blank">Live Demo</a>
            </p>
        `,
        right: `
            <div class="project-image-frame">
                <img src="image/Suin.png" alt="Suin">
            </div>
            
            <h3>개발 기간</h3>
            <p>2025.12.23 ~ 2025.12.26</p>
            
            <h3>상세 내용</h3>
            <p>갑작스럽게 팀이 변경되어 팀을 추억하기 위해 개인 프로젝트로 간단하게 디자인만 했던 프로젝트입니다.</p>
        `,
        color: '#f2cc8f', tag: 'TEAM'
    },
    
    'WAD': {
        left: `
            <h3>WAD 프로젝트 소개</h3>
            <p>본 프로젝트는 사용자의 이력 정보를 기반으로 이력서 작성, 포트폴리오 탐색, 디지털 명함 공유까지 하나의 흐름으로 제공하는 인터랙티브 웹 애플리케이션입니다. HTML, CSS, JavaScript만을 사용하여 개발되었으며, 로컬스토리지를 활용한 데이터 저장, PDF 다운로드 기능, 동적 UI 생성 등 다양한 기능을 제공합니다.</p>
            
            <h3>기술 스택</h3>
            <ul>
                <li><strong>Frontend:</strong> HTML&CSS&JS</li>
                <li><strong>Tool:</strong> Notion, Figma, Github, Canva</li>
            </ul>
            
            <h3>링크</h3>
            <p>
                <a href="https://github.com/HYU-DreamTeam/WebApplication" target="_blank">GitHub Repository</a> <br>
                <a href="https://hyu-dreamteam.github.io/WAD-Demo/" target="_blank">Live Demo</a>
            </p>
        `,
        right: `
            <div class="project-image-frame">
                <img src="image/WebApplication.png" alt="WebApplication">
            </div>
            
            <h3>개발 기간</h3>
            <p>2025.12.23 ~ 2026.01.10</p>
            
            <h3>Team : HYU-DreamTeam</h3>
            <ul>
                <li><strong>박재형 : </strong> Portfolio Page 제작</li>
                <li><strong>윤태웅 : </strong> Resume Page 제작</li>
                <li><strong>원준서 : </strong> Care Page 제작</li>
                <li><strong>이주혜 : </strong> Main Page 제작</li>
            </ul>
        `,
        color: '#b8a2c7', tag: 'TEAM'
    },

    // ============================================
    // 3층: 대외활동 (External Activities)
    // ============================================
    'Cert': {
        left: `
            <h3>자격증</h3>
            <p>취득한 자격증입니다.</p>
            
            <h3>항목</h3>
            <ul>
                <li><strong>정보처리산업기사</strong> </li>
                <li><strong>웹디자인개발기능사</strong> </li>
                <li><strong>운전면허</strong> </li>
            </ul>
        `,
        right: `
            <h3>정보처리산업기사</h3>
            <ul>
                <li><strong>취득일 : </strong> 2025.01</li>
                <li><strong>발급기관 : </strong> 한국산업인력공단</li>
            </ul>

            <h3>웹디자인개발기능사</h3>
            <ul>
                <li><strong>취득일 : </strong> 2024.12</li>
                <li><strong>발급기관 : </strong> 한국산업인력공단</li>
            </ul>
        `,
        color: '#f2cc8f', tag: 'ACTIVITY'
    },
    
    'Paper': {
        left: `
            <h3>논문 소개</h3>
            <p style="font-size: 10px;">AI 기반 사용자 맞춤형 공지사항 통합 알림 시스템은 대학의 현장실습 및 산학연계 프로그램에 참여하는 학부생들이 학
교와 참여기업의 공지사항을 실시간으로 확인할 수 있도록 지원하는 지능형 프로그램이다. 기존에는 각 웹사이트를 개별
적으로 방문해야 하는 번거로움이 있었으나, 본 시스템은 사용자가 참여기업을 선택하거나 공지사항 URL을 입력하면 설
정된 주기에 따라 해당 페이지를 자동으로 크롤링하고 새로운 공지 등록 시 카카오톡 알림톡 또는 문자메시지로 즉시 전
달한다. 더 나아가 사용자의 공지사항 클릭 패턴을 AI로 분석하여 개인별 관심 키워드를 자동 추출하고 학과별 인기 공
지사항을 상단에 우선 배치하는 지능형 태깅 시스템을 구현하였다.</p>
            
            <h3>기술 스택</h3>
            <ul>
                <li><strong>학회:</strong> 한국정보과학회 학부생논문</li>
                <li><strong>주제:</strong> AI 기반 사용자 맞춤형 공지사항 통합 알림 시스템</li>
            </ul>
            
            <h3>링크</h3>
            <p>
                <a href="https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12318711" target="_blank">논문 링크</a>
            </p>
        `,
        right: `
            <div class="project-image-frame">
                <img src="image/Paper.png" alt="Paper">
            </div>
            
            <h3>작성 기간</h3>
            <p>2025.04 ~ 2025.07</p>
            
            <h3>상세 내용</h3>
            <p>1학년 1학기 프로그래밍설계방법론 과제로 진행된 논문입니다.</p>
        `,
        color: '#e58a7d', tag: 'ACTIVITY'
    },
    
    'Conference': {
        left: `
            <h3>WLMS프로젝트 소개</h3>
            <p>본 연구는 게임화 기법을 활용한 웹 개발 학습 플랫폼을 설계하고 구현하였습니다. 티어 시스템과 GitHub 자동 연동을 통해 학생들의 자발적 학습 참여를 이끌어냈으며 실제로 학생들의 높은 참여율과 새벽 시간 학습 참여를 통해 그 효과를 입증하였습니다. 향후 AI 기반 자동화 기능 도입과 범용 플랫폼으로의 확장을 계획하고 있습니다.</p>
            
            <h3>세부 사항</h3>
            <ul>
                <li><strong>학술대회:</strong> 2025년 한양대학교 SW/ICT/AI 종합학술대회 참가</li>
                <li><strong>세션:</strong> 404 Not Found Session</li>
            </ul>
            
            <h3>링크</h3>
            <p>
                <a href="https://github.com/TaeWoongYoun/LMS" target="_blank">프로젝트 Github 링크</a>
            </p>
        `,
        right: `
            <div class="project-image-frame">
                <img src="image/Conference.png" alt="Conference">
            </div>
            
            <h3>개발 기간</h3>
            <p>2024.12 ~ 2025.11</p>
            
            <h3>상세 내용</h3>
            <p>기존에 사이드프로젝트로 개발했던 LMS프로젝트를 학술대회에서 발표하기 위해 기능을 추가하고 보완했습니다.</p>
        `,
        color: '#a8c69f', tag: 'ACTIVITY'
    },

'SkillsCompetitions': {
    left: `
        <h3>Skills Competitions</h3>
        <p>전국 및 지방 기능경기대회 웹 개발 종목 입상 기록입니다.</p>
        
        <h3>기술 스택</h3>
        <ul>
            <li><strong>Web Publishing:</strong> HTML5 & CSS3</li>
            <li><strong>Frontend:</strong> JavaScript </li>
            <li><strong>Backend:</strong> PHP </li>
            <li><strong>Database:</strong> MySQL (XAMPP Environment)</li>
        </ul>
    `,
    right: `
        <h3>준비 기간</h3>
        <p>2023.08 ~ 2024.08</p>
        
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
    color: '#b8a2c7', tag: 'ACTIVITY'
},
    
    'HYAI': {
        left: `
            <h3>소개</h3>
            <p>한양대 ERICA 인공지능 학회인 HYAI에서 활동한 내용입니다.</p>
            
            <h3>활동 내용</h3>
            <ul>
                <li><strong>알고리즘 스터디:</strong> 2025.04 ~ 2025.06 </li>
                <li><strong>Python 스터디:</strong> 2025.04 ~ 2025.06 </li>
                <li><strong>프로젝트 개발 스터디:</strong> 2025.05 ~ 2025.08</li>
                <li><strong>의료ai 스터디:</strong> 2025.10 ~ 2025.12</li>
                <li><strong>논문 리뷰 스터디:</strong> 2025.11</li>
            </ul>
        `,
        right: `
            <h3>알고리즘 스터디</h3>
            <p>프로그래머스 Python 문제를 풀고 리뷰했습니다.</p>

            <h3>Python 스터디</h3>
            <p>Python 기초 문법과 실습을 진행했습니다.</p>

            <h3>프로젝트 개발 스터디</h3>
            <p>YOLO 기초 문법을 학습하고 하냥이 캐릭터를 학습시켰습니다.</p>
            
            <h3>의료ai 스터디</h3>
            <p>뇌를 바꾼 공학 공학의 바꾼 뇌 책을 읽으며 의료 AI 기술에 대해 학습하고 토론을 진행했습니다.</p>
            
            <h3>논문 리뷰 스터디</h3>
            <p>CS분야 논문을 각자 읽고 리뷰합니다.</p>
        `,
        color: '#74a4bc', tag: 'ACTIVITY'
    },
    
    'HYEND': {
        left: `
            <h3>소개</h3>
            <p>한양대학교 ERICA 웹개발 학회인 HY-END에서 활동한 내용입니다.</p>
            
            <h3>활동 내용</h3>
            <ul>
                <li><strong>React 스터디:</strong> 2025.09 ~ 2025.12</li>
            </ul>
        `,
        right: `
            <h3>React 스터디</h3>
            <p>React 기초 문법과 학술대회를 준비했습니다.</p>
        `,
        color: '#e58a7d', tag: 'ACTIVITY'
    }
};

function openBook(id) {
    const data = bookData[id];
    if (!data) return;

    const modal = document.getElementById('bookModal');
    document.getElementById('modalTitleInside').innerText = id;
    document.getElementById('modalTitleCover').innerText = id;
    document.getElementById('coverTag').innerText = data.tag;
    document.getElementById('modalSummary').innerHTML = data.left;
    document.getElementById('modalBody').innerHTML = data.right;
    document.getElementById('modalCover').style.backgroundColor = data.color;

    modal.style.display = 'flex';
    modal.offsetHeight; 
    modal.classList.add('open');
}

function closeBook() {
    const modal = document.getElementById('bookModal');
    modal.classList.remove('open');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 1000);
}

window.onclick = (e) => {
    const modal = document.getElementById('bookModal');
    if (e.target === modal) closeBook();
};

document.getElementById('modalContainer').addEventListener('click', function(e) {
    e.stopPropagation(); // 클릭 이벤트가 부모(배경)로 퍼지는 것을 막음
});