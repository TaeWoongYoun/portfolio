function toggleMenu() {
    document.getElementById('slide-menu').classList.toggle('active');
}

const bookData = {
    // ============================================
    // 1층: 개인 프로젝트 (Individual Projects)
    // ============================================
    'WLMS': {
        summary: `
            <h3>📌 프로젝트 소개</h3>
            <p>인평자동차고등학교 기능반 후배들을 위한 종합 학습 플랫폼입니다. Netflix 스타일의 카드 그리드 디자인을 적용했습니다.</p>
            
            <h3>🛠️ 기술 스택</h3>
            <ul>
                <li><strong>Frontend:</strong> React 18, Router, Axios</li>
                <li><strong>Backend:</strong> Node.js, Express, JWT</li>
                <li><strong>Database:</strong> MySQL 8.0, Sequelize</li>
                <li><strong>Deploy:</strong> Railway, GitHub Actions</li>
            </ul>
            
            <h3>🔗 링크</h3>
            <p>
                <a href="https://github.com/TaeWoongYoun/LMS" target="_blank">📂 GitHub</a><br>
                <a href="https://inpyung-learn.com" target="_blank">🌐 Live Demo</a>
            </p>
        `,
        body: `
            <h3>⭐ 주요 기능</h3>
            <ul>
                <li>GitHub API - 잔디 실시간 시각화</li>
                <li>과제 제출 및 멘토 피드백</li>
                <li>자동 채점 시스템</li>
                <li>커스텀 도메인 (inpyung-learn.com)</li>
                <li>반응형 디자인</li>
            </ul>
            
            <h3>🏆 성과</h3>
            <p>2025 한양대 SW/ICT/AI 종합학술대회<br>404 Not Found 세션 발표</p>
            
            <h3>📅 개발 기간</h3>
            <p>2024.09 ~ 2025.01 (5개월)</p>
            
            <h3>👤 참여 인원</h3>
            <p>개인 프로젝트 (1인 개발)</p>
        `,
        color: '#e58a7d', tag: 'INDIVIDUAL'
    },
    
    'KPI': {
        summary: `
            <h3>📌 프로젝트 소개</h3>
            <p>기업의 부서별 핵심성과지표를 체계적으로 관리하고 분석하는 웹 애플리케이션입니다.</p>
            
            <h3>🛠️ 기술 스택</h3>
            <ul>
                <li><strong>Backend:</strong> Spring Boot 3.x</li>
                <li><strong>ORM:</strong> Spring Data JPA</li>
                <li><strong>Security:</strong> Spring Security</li>
                <li><strong>Database:</strong> MySQL, HikariCP</li>
            </ul>
            
            <h3>🔗 링크</h3>
            <p><a href="https://github.com/TaeWoongYoun/KPI" target="_blank">📂 GitHub Repository</a></p>
        `,
        body: `
            <h3>⭐ 주요 기능</h3>
            <ul>
                <li>부서별 KPI 목표 설정</li>
                <li>실적 입력 및 달성률 자동 계산</li>
                <li>가중치 적용 종합 성과 산출</li>
                <li>정부 서버 다건 데이터 전송</li>
                <li>RESTful API 설계</li>
            </ul>
            
            <h3>🔧 API 테스트</h3>
            <p>Postman, Swagger UI</p>
            
            <h3>📝 비고</h3>
            <p>한양대학교 프로젝트, 정부 기관 데이터 전송 요구사항 반영</p>
            
            <h3>👤 참여 인원</h3>
            <p>개인 프로젝트 (1인 개발)</p>
        `,
        color: '#74a4bc', tag: 'INDIVIDUAL'
    },
    
    'Algorithm': {
        summary: `
            <h3>📌 프로젝트 소개</h3>
            <p>프로그래머스 및 백준 알고리즘 문제 풀이를 체계적으로 정리한 학습 아카이브입니다.</p>
            
            <h3>🛠️ 사용 언어</h3>
            <ul>
                <li><strong>Python</strong> - 메인 언어</li>
                <li><strong>Java 11</strong> - 서브 언어</li>
                <li><strong>C</strong> - 기초 알고리즘</li>
            </ul>
            
            <h3>🔗 링크</h3>
            <p><a href="https://github.com/TaeWoongYoun/programmers-algorithm" target="_blank">📂 GitHub ⭐1</a></p>
        `,
        body: `
            <h3>📚 학습 범위</h3>
            <ul>
                <li><strong>자료구조:</strong> 스택, 큐, 해시, 힙, 트리</li>
                <li><strong>알고리즘:</strong> DFS/BFS, DP, 그리디</li>
            </ul>
            
            <h3>📊 난이도</h3>
            <p>프로그래머스 Lv1~5<br>백준 Bronze~Platinum</p>
            
            <h3>📖 학습 활동</h3>
            <ul>
                <li>HYAI 알고리즘 스터디 (2025.04~06)</li>
                <li>주 3회 코딩테스트</li>
                <li>시간/공간 복잡도 분석</li>
            </ul>
            
            <h3>🎯 학습 방법</h3>
            <p>매일 최소 1문제, 다양한 접근법 시도</p>
        `,
        color: '#a8c69f', tag: 'INDIVIDUAL'
    },
    
    'AIX': {
        summary: `
            <h3>📌 프로젝트 소개</h3>
            <p>한양대 AIX 융합 교과목 데이터 분석 및 통계 분석 프로젝트 모음입니다.</p>
            
            <h3>🛠️ 기술 스택</h3>
            <ul>
                <li><strong>R:</strong> ggplot2, dplyr, tidyr</li>
                <li><strong>Python:</strong> Pandas, Scikit-learn</li>
                <li><strong>시각화:</strong> Matplotlib, Seaborn</li>
            </ul>
            
            <h3>🔗 링크</h3>
            <p><a href="https://github.com/TaeWoongYoun/AIX-R-Py-Repo" target="_blank">📂 GitHub Repository</a></p>
        `,
        body: `
            <h3>📊 R 언어 분석</h3>
            <ul>
                <li>데이터 시각화 (히스토그램, 산점도)</li>
                <li>회귀분석, ANOVA, t-검정</li>
            </ul>
            
            <h3>🐍 Python 머신러닝</h3>
            <ul>
                <li><strong>지도:</strong> 회귀, 분류, 의사결정나무</li>
                <li><strong>비지도:</strong> K-Means, PCA</li>
            </ul>
            
            <h3>📁 프로젝트 예시</h3>
            <ul>
                <li>타이타닉 생존자 예측</li>
                <li>붓꽃 데이터 분류</li>
                <li>주택 가격 예측</li>
            </ul>
        `,
        color: '#b8a2c7', tag: 'INDIVIDUAL'
    },
    
    'Django': {
        summary: `
            <h3>📌 프로젝트 소개</h3>
            <p>Python Django 커뮤니티형 웹 서비스. 게시판, 인증, 댓글 시스템 구현.</p>
            
            <h3>🛠️ 기술 스택</h3>
            <ul>
                <li><strong>Backend:</strong> Django 4.x, DRF</li>
                <li><strong>Database:</strong> SQLite3, PostgreSQL</li>
                <li><strong>Frontend:</strong> Bootstrap 5, JS</li>
            </ul>
            
            <h3>🔗 링크</h3>
            <p><a href="https://github.com/TaeWoongYoun/DjangoProject" target="_blank">📂 GitHub Repository</a></p>
        `,
        body: `
            <h3>🏗️ 아키텍처</h3>
            <ul>
                <li>MVT 패턴</li>
                <li>Django ORM</li>
                <li>자동 DB 마이그레이션</li>
            </ul>
            
            <h3>⭐ 주요 기능</h3>
            <ul>
                <li>회원가입, 로그인, 로그아웃</li>
                <li>CRUD 게시판</li>
                <li>댓글 및 대댓글</li>
                <li>페이지네이션 및 검색</li>
                <li>권한 검증</li>
            </ul>
            
            <h3>👤 참여 인원</h3>
            <p>개인 프로젝트 (1인 개발)</p>
        `,
        color: '#f2cc8f', tag: 'INDIVIDUAL'
    },
    
    'IE': {
        summary: `
            <h3>📌 프로젝트 소개</h3>
            <p>정보처리산업기사 자격증 취득을 위한 실기 대비 이론 및 코드 저장소입니다.</p>
            
            <h3>✅ 학습 성과</h3>
            <ul>
                <li><strong>취득:</strong> 2024년 12월 합격</li>
                <li><strong>필기:</strong> 80점</li>
                <li><strong>실기:</strong> 75점</li>
                <li><strong>학습:</strong> 6개월 독학</li>
            </ul>
            
            <h3>🔗 링크</h3>
            <p><a href="https://github.com/TaeWoongYoun/IndustrialEngineer" target="_blank">📂 GitHub Repository</a></p>
        `,
        body: `
            <h3>📖 학습 범위</h3>
            <ul>
                <li><strong>1과목:</strong> SW 설계 (UML, SOLID)</li>
                <li><strong>2과목:</strong> SW 개발 (API, 패키징)</li>
                <li><strong>3과목:</strong> DB (SQL, 정규화)</li>
                <li><strong>4과목:</strong> 프로그래밍 (Java, C)</li>
            </ul>
            
            <h3>💻 실습 내용</h3>
            <ul>
                <li>기출문제 코드 구현</li>
                <li>알고리즘 문제 풀이</li>
                <li>실전 모의고사</li>
            </ul>
            
            <h3>🎯 향후 계획</h3>
            <p>정보처리기사 (2025 상반기)<br>AWS Solutions Architect</p>
        `,
        color: '#e58a7d', tag: 'INDIVIDUAL'
    },
    
    'Modbus': {
        summary: `
            <h3>📌 프로젝트 소개</h3>
            <p>(주)두나정보기술 인턴 기간 수행한 Modbus 통신 기반 스마트 팩토리 프로젝트입니다.</p>
            
            <h3>🏢 근무 정보</h3>
            <ul>
                <li><strong>회사:</strong> (주)두나정보기술</li>
                <li><strong>기간:</strong> 2023.08 ~ 2025.01</li>
                <li><strong>직책:</strong> 도제 인턴</li>
            </ul>
            
            <h3>🔗 링크</h3>
            <p><a href="https://github.com/TaeWoongYoun/modbus_project" target="_blank">📂 GitHub ⭐1</a></p>
        `,
        body: `
            <h3>🛠️ 기술 스택</h3>
            <ul>
                <li><strong>언어:</strong> PHP, Python, JS</li>
                <li><strong>통신:</strong> Modbus TCP/IP, RTU</li>
                <li><strong>HW:</strong> Arduino, PLC, 센서</li>
                <li><strong>시각화:</strong> Chart.js</li>
            </ul>
            
            <h3>⚙️ 구현 기능</h3>
            <ul>
                <li>온도/압력/습도 실시간 수집</li>
                <li>PLC 코일 제어</li>
                <li>웹 모니터링 대시보드</li>
                <li>임계값 알람 발송</li>
            </ul>
            
            <h3>📊 성과</h3>
            <p>수집 주기 100ms 이하<br>24시간 무중단 운영</p>
        `,
        color: '#74a4bc', tag: 'INDIVIDUAL'
    },
    
    'Winter': {
        summary: `
            <h3>📌 프로젝트 소개</h3>
            <p>2024~2025 겨울방학 집중 학습 세션의 기술 스택 및 프로젝트 정리입니다.</p>
            
            <h3>🎯 학습 방법</h3>
            <ul>
                <li>매일 4시간 이상 집중 학습</li>
                <li>이론 → 즉시 실습 적용</li>
                <li>Notion, Tistory 정리</li>
                <li>스터디 그룹 코드 리뷰</li>
            </ul>
            
            <h3>🔗 링크</h3>
            <p><a href="https://github.com/TaeWoongYoun/WinterSession" target="_blank">📂 GitHub Repository</a></p>
        `,
        body: `
            <h3>💻 학습 주제</h3>
            <ul>
                <li><strong>CS:</strong> 자료구조, 알고리즘, OS</li>
                <li><strong>FE:</strong> HTML, CSS, JS, React</li>
                <li><strong>BE:</strong> Node.js, Spring Boot</li>
                <li><strong>DB:</strong> MySQL, MongoDB</li>
            </ul>
            
            <h3>🛠️ 개발 도구</h3>
            <ul>
                <li>Git/GitHub 버전 관리</li>
                <li>Docker 기초</li>
                <li>GitHub Actions CI/CD</li>
            </ul>
            
            <h3>📁 미니 프로젝트</h3>
            <p>TodoList, 날씨 앱, 채팅 앱</p>
        `,
        color: '#a8c69f', tag: 'INDIVIDUAL'
    },

    // ============================================
    // 2층: 팀 프로젝트 (Team Projects)
    // ============================================
    'Progate': {
        summary: `
            <h3>🏆 수상 정보</h3>
            <p><strong>🥈 준우승 (2등)</strong><br>전체 30개 팀 중</p>
            
            <h3>👥 팀 정보</h3>
            <ul>
                <li><strong>팀명:</strong> 사차원 감자들</li>
                <li><strong>인원:</strong> 4명</li>
                <li><strong>역할:</strong> 프론트엔드 & UI/UX</li>
            </ul>
            
            <h3>📅 대회 정보</h3>
            <p>Progate Hackathon in Seoul<br>2025.11.01~02 (24h)</p>
            
            <h3>🔗 링크</h3>
            <p><a href="https://github.com/Four-potatoes/ProgateHackathon" target="_blank">📂 GitHub ⭐2</a></p>
        `,
        body: `
            <h3>📌 프로젝트: EduPath</h3>
            <p>AI 기반 개인 맞춤형 학습 로드맵 플랫폼</p>
            
            <h3>🛠️ 기술 스택</h3>
            <ul>
                <li><strong>FE:</strong> React, TypeScript, Tailwind</li>
                <li><strong>BE:</strong> Firebase</li>
                <li><strong>AI:</strong> OpenAI GPT API</li>
                <li><strong>Host:</strong> Vercel</li>
            </ul>
            
            <h3>⭐ 주요 기능</h3>
            <ul>
                <li>AI 역량 진단 시스템</li>
                <li>커리큘럼 자동 생성</li>
                <li>멘토-멘티 매칭</li>
            </ul>
            
            <h3>🎁 시상</h3>
            <p>상금 100만원, Progate 1년</p>
        `,
        color: '#b8a2c7', tag: 'TEAM'
    },
    
    'Patch': {
        summary: `
            <h3>📌 프로젝트 소개</h3>
            <p>EV3 로봇 자율 주행 게임. 센서 기반 맵 인식 및 최적 경로 탐색 구현.</p>
            
            <h3>👥 팀 정보</h3>
            <ul>
                <li><strong>팀명:</strong> EV3Team</li>
                <li><strong>소속:</strong> 인평자동차고 기능반</li>
            </ul>
            
            <h3>🛠️ 기술 스택</h3>
            <ul>
                <li><strong>언어:</strong> C (RobotC)</li>
                <li><strong>HW:</strong> LEGO Mindstorms EV3</li>
            </ul>
            
            <h3>🔗 링크</h3>
            <p><a href="https://github.com/EV3Team/PatchAcquisitionGame" target="_blank">📂 GitHub Repository</a></p>
        `,
        body: `
            <h3>🎮 게임 규칙</h3>
            <ul>
                <li><strong>목표:</strong> 최대 패치 수집</li>
                <li><strong>제약:</strong> 장애물 회피, 배터리</li>
                <li><strong>평가:</strong> 패치 수, 시간, 효율</li>
            </ul>
            
            <h3>⚙️ 센서 시스템</h3>
            <ul>
                <li><strong>초음파:</strong> 장애물 감지</li>
                <li><strong>컬러:</strong> 라인 트레이싱</li>
                <li><strong>자이로:</strong> 회전 제어</li>
            </ul>
            
            <h3>🔧 알고리즘</h3>
            <p>PID 제어, A* 경로 탐색, 그리디</p>
        `,
        color: '#74a4bc', tag: 'TEAM'
    },
    
    'Sensor': {
        summary: `
            <h3>📌 프로젝트 소개</h3>
            <p>다양한 하드웨어 센서를 활용한 IoT 데이터 수집 및 처리 프로젝트입니다.</p>
            
            <h3>👥 팀 정보</h3>
            <p><strong>팀명:</strong> EV3Team</p>
            
            <h3>🛠️ 기술 스택</h3>
            <ul>
                <li><strong>HW:</strong> Arduino, Raspberry Pi</li>
                <li><strong>언어:</strong> C/C++, Python</li>
                <li><strong>통신:</strong> I2C, SPI, MQTT</li>
            </ul>
            
            <h3>🔗 링크</h3>
            <p><a href="https://github.com/EV3Team/smart-sensors-assignments" target="_blank">📂 GitHub Repository</a></p>
        `,
        body: `
            <h3>🔌 사용 센서</h3>
            <ul>
                <li><strong>환경:</strong> DHT22, MQ-135, 조도</li>
                <li><strong>모션:</strong> 가속도계, 자이로, 초음파</li>
                <li><strong>통신:</strong> ESP8266, Bluetooth</li>
            </ul>
            
            <h3>📁 구현 프로젝트</h3>
            <ul>
                <li><strong>스마트홈:</strong> 온습도 모니터링</li>
                <li><strong>모션:</strong> 낙상 감지</li>
                <li><strong>주차:</strong> 점유 감지</li>
            </ul>
            
            <h3>☁️ 클라우드</h3>
            <p>ThingSpeak, AWS IoT Core</p>
        `,
        color: '#e58a7d', tag: 'TEAM'
    },
    
    'MCA': {
        summary: `
            <h3>📌 프로젝트 소개</h3>
            <p>마트 장바구니 데이터 분석으로 상품 연관성 파악 및 추천 시스템 구현.</p>
            
            <h3>👥 팀 정보</h3>
            <ul>
                <li><strong>팀명:</strong> ICT-Top-Bottom</li>
                <li><strong>과목:</strong> 오픈소스SW 수업</li>
            </ul>
            
            <h3>🛠️ 기술 스택</h3>
            <ul>
                <li><strong>언어:</strong> Python (Jupyter)</li>
                <li><strong>라이브러리:</strong> Pandas, NumPy</li>
            </ul>
            
            <h3>🔗 링크</h3>
            <p><a href="https://github.com/ICT-Top-Bottom/MCA" target="_blank">📂 GitHub 🍴1</a></p>
        `,
        body: `
            <h3>📊 분석 기법</h3>
            <ul>
                <li>Market Basket Analysis</li>
                <li>Apriori, FP-Growth</li>
            </ul>
            
            <h3>📈 주요 지표</h3>
            <ul>
                <li><strong>지지도:</strong> 동시 구매 빈도</li>
                <li><strong>신뢰도:</strong> 조건부 확률</li>
                <li><strong>향상도:</strong> 연관성 강도</li>
            </ul>
            
            <h3>⭐ 결과물</h3>
            <ul>
                <li>상품 추천 알고리즘</li>
                <li>연관 규칙 시각화</li>
                <li>분석 보고서</li>
            </ul>
        `,
        color: '#a8c69f', tag: 'TEAM'
    },
    
    'Suin': {
        summary: `
            <h3>📌 프로젝트 소개</h3>
            <p>수인분당선 실시간 열차 위치 및 도착 정보 제공 웹 서비스입니다.</p>
            
            <h3>👥 팀 정보</h3>
            <ul>
                <li><strong>팀명:</strong> SuinBundang</li>
                <li><strong>인원:</strong> 3명</li>
                <li><strong>역할:</strong> 프론트엔드 & API</li>
            </ul>
            
            <h3>🛠️ 기술 스택</h3>
            <ul>
                <li><strong>FE:</strong> React, Redux, Leaflet</li>
                <li><strong>BE:</strong> Node.js, Express</li>
            </ul>
            
            <h3>🔗 링크</h3>
            <p><a href="https://github.com/SuinBundang/SuinBundang" target="_blank">📂 GitHub Repository</a></p>
        `,
        body: `
            <h3>🔌 API 연동</h3>
            <ul>
                <li>서울시 실시간 지하철 API</li>
                <li>Kakao Map API</li>
                <li>5초 폴링 + WebSocket</li>
            </ul>
            
            <h3>⭐ 주요 기능</h3>
            <ul>
                <li>실시간 열차 위치</li>
                <li>평일/주말 시간표</li>
                <li>최단 경로 안내</li>
                <li>역 즐겨찾기</li>
            </ul>
            
            <h3>🚀 배포</h3>
            <p>AWS EC2, Nginx</p>
        `,
        color: '#f2cc8f', tag: 'TEAM'
    },
    
    'WebApplication': {
        summary: `
            <h3>📌 프로젝트 소개</h3>
            <p>실생활에 유용한 다목적 웹 서비스 팀 프로젝트입니다.</p>
            
            <h3>👥 팀 정보</h3>
            <ul>
                <li><strong>팀명:</strong> HYU-DreamTeam</li>
                <li><strong>인원:</strong> 6명</li>
                <li><strong>역할:</strong> 프론트엔드 리드</li>
            </ul>
            
            <h3>🔄 개발 프로세스</h3>
            <ul>
                <li>애자일 (2주 스프린트)</li>
                <li>Jira 이슈 트래킹</li>
                <li>GitHub PR 코드 리뷰</li>
            </ul>
            
            <h3>🔗 링크</h3>
            <p><a href="https://github.com/HYU-DreamTeam/WebApplication" target="_blank">📂 GitHub Repository</a></p>
        `,
        body: `
            <h3>🛠️ 기술 스택</h3>
            <ul>
                <li><strong>FE:</strong> React 18, Context API</li>
                <li><strong>Style:</strong> Styled-components</li>
                <li><strong>BE:</strong> Spring Boot, JPA</li>
                <li><strong>DB:</strong> MySQL 8.0</li>
                <li><strong>Auth:</strong> Spring Security, JWT</li>
            </ul>
            
            <h3>⭐ 구현 기능</h3>
            <ul>
                <li><strong>생산성:</strong> Todo, 타이머</li>
                <li><strong>유틸:</strong> 환율, 단위변환</li>
                <li><strong>엔터:</strong> 게임, 날씨</li>
            </ul>
        `,
        color: '#b8a2c7', tag: 'TEAM'
    },
    
    'DataAnalysis': {
        summary: `
            <h3>📌 프로젝트 소개</h3>
            <p>공공 데이터를 활용한 사회 현상 분석 및 인사이트 도출 프로젝트입니다.</p>
            
            <h3>👥 팀 정보</h3>
            <ul>
                <li><strong>팀명:</strong> TeamCountingStars</li>
                <li><strong>인원:</strong> 4명</li>
                <li><strong>역할:</strong> 전처리, 시각화</li>
            </ul>
            
            <h3>🛠️ 기술 스택</h3>
            <ul>
                <li><strong>언어:</strong> Python 3.10</li>
                <li><strong>도구:</strong> Jupyter, Colab</li>
            </ul>
            
            <h3>🔗 링크</h3>
            <p><a href="https://github.com/TeamCountingStars/dataAnalysis" target="_blank">📂 GitHub Repository</a></p>
        `,
        body: `
            <h3>📚 라이브러리</h3>
            <ul>
                <li><strong>데이터:</strong> Pandas, NumPy</li>
                <li><strong>시각화:</strong> Matplotlib, Plotly</li>
                <li><strong>ML:</strong> Scikit-learn, XGBoost</li>
            </ul>
            
            <h3>📊 분석 주제</h3>
            <ul>
                <li>서울시 생활인구 패턴</li>
                <li>대중교통 이용 패턴</li>
                <li>부동산 가격 예측 (R²: 0.85)</li>
            </ul>
            
            <h3>📈 결과물</h3>
            <p>분석 보고서 3건<br>정책 제안</p>
        `,
        color: '#e58a7d', tag: 'TEAM'
    },

    // ============================================
    // 3층: 대외활동 (External Activities)
    // ============================================
    'Cert': {
        summary: `
            <h3>🏆 정보처리산업기사</h3>
            <ul>
                <li><strong>취득:</strong> 2024년 12월</li>
                <li><strong>발급:</strong> 한국산업인력공단</li>
                <li><strong>필기:</strong> 80점 / <strong>실기:</strong> 75점</li>
            </ul>
            
            <h3>🏆 웹디자인기능사</h3>
            <ul>
                <li><strong>취득:</strong> 2025년 1월</li>
                <li><strong>발급:</strong> 한국산업인력공단</li>
                <li><strong>평가:</strong> HTML/CSS/JS 웹사이트</li>
            </ul>
        `,
        body: `
            <h3>📚 학습 과정</h3>
            <ul>
                <li><strong>정보처리:</strong> 6개월 독학 (3h/day)</li>
                <li><strong>웹디자인:</strong> 3개월 실습 위주</li>
                <li>기출 반복 + 모의고사</li>
                <li>스터디 그룹 (5명)</li>
            </ul>
            
            <h3>💡 활용</h3>
            <ul>
                <li>SW 개발 직무 우대</li>
                <li>공공기관 가산점</li>
            </ul>
            
            <h3>🎯 향후 계획</h3>
            <ul>
                <li>정보처리기사</li>
                <li>AWS Solutions Architect</li>
            </ul>
        `,
        color: '#f2cc8f', tag: 'ACTIVITY'
    },
    
    'Paper': {
        summary: `
            <h3>📄 논문 정보</h3>
            <ul>
                <li><strong>제목:</strong> AI기반 맞춤형 공지사항 통합 알림 시스템</li>
                <li><strong>저자:</strong> 윤태웅 (제1저자)</li>
                <li><strong>학회:</strong> KCC 2025</li>
                <li><strong>작성:</strong> 2025년 7월</li>
                <li><strong>발표:</strong> 제주 ICC</li>
            </ul>
        `,
        body: `
            <h3>🔬 연구 배경</h3>
            <p>여러 플랫폼에 흩어진 공지사항 확인 어려움 해결</p>
            
            <h3>💡 제안 시스템</h3>
            <ul>
                <li><strong>AI 분류:</strong> NLP 중요도 분석</li>
                <li><strong>맞춤 알림:</strong> 관심 프로파일링</li>
                <li><strong>통합:</strong> 전체 공지 한 화면</li>
            </ul>
            
            <h3>🔧 기술 스택</h3>
            <ul>
                <li><strong>NLP:</strong> KoBERT</li>
                <li><strong>BE:</strong> FastAPI, Redis</li>
                <li><strong>App:</strong> React Native</li>
            </ul>
        `,
        color: '#e58a7d', tag: 'ACTIVITY'
    },
    
    'Hackathon': {
        summary: `
            <h3>🏆 Progate Hackathon</h3>
            <ul>
                <li><strong>수상:</strong> 🥈 준우승 (2등)</li>
                <li><strong>일시:</strong> 2025.11.01~02 (24h)</li>
                <li><strong>팀:</strong> 사차원 감자들 (4명)</li>
                <li><strong>규모:</strong> 30팀, 약 120명</li>
            </ul>
            
            <h3>🎁 시상 내역</h3>
            <ul>
                <li>상금: 100만원</li>
                <li>Progate 1년 멤버십</li>
                <li>채용 연계 기회</li>
            </ul>
        `,
        body: `
            <h3>💻 프로젝트: EduPath</h3>
            <p>AI 기반 학습 로드맵 플랫폼</p>
            
            <h3>🛠️ 기술 스택</h3>
            <ul>
                <li><strong>FE:</strong> React, TypeScript</li>
                <li><strong>BE:</strong> Firebase</li>
                <li><strong>AI:</strong> OpenAI GPT-4</li>
            </ul>
            
            <h3>🎤 발표</h3>
            <p>7분 발표 + 3분 Q&A<br>MVP 데모 시연</p>
            
            <h3>💪 성공 요인</h3>
            <p>명확한 문제 정의<br>24h 내 MVP 완성<br>효과적인 팀워크</p>
        `,
        color: '#74a4bc', tag: 'ACTIVITY'
    },
    
    'Academic': {
        summary: `
            <h3>📚 학술대회 정보</h3>
            <ul>
                <li><strong>대회:</strong> 2025 한양대 SW/ICT/AI 종합학술대회</li>
                <li><strong>일시:</strong> 2025년 11월</li>
                <li><strong>장소:</strong> ERICA 학술정보관</li>
            </ul>
            
            <h3>🎯 참가 세션</h3>
            <ul>
                <li><strong>세션:</strong> 404 Not Found</li>
                <li><strong>형식:</strong> 15분 발표 + 5분 Q&A</li>
            </ul>
        `,
        body: `
            <h3>💻 발표 프로젝트</h3>
            <p><strong>W-LMS:</strong> React 기반 학습 관리 시스템</p>
            
            <h3>📊 발표 구성</h3>
            <ol>
                <li>프로젝트 배경</li>
                <li>시스템 설계</li>
                <li>주요 기능 데모</li>
                <li>배포 전략</li>
                <li>향후 계획</li>
            </ol>
            
            <h3>💡 성과</h3>
            <ul>
                <li>프로젝트 객관적 정리</li>
                <li>발표 능력 향상</li>
                <li>네트워킹</li>
            </ul>
        `,
        color: '#a8c69f', tag: 'ACTIVITY'
    },
    
    'HYAI': {
        summary: `
            <h3>🤖 HYAI 소개</h3>
            <ul>
                <li><strong>학회:</strong> 한양대 인공지능 학회</li>
                <li><strong>소속:</strong> ERICA 캠퍼스</li>
                <li><strong>활동:</strong> 2025.03 ~ 현재</li>
            </ul>
            
            <h3>🏆 학회 내 활동</h3>
            <ul>
                <li>신입생 멘토링</li>
                <li>학회 홈페이지 개발</li>
                <li>해커톤 기획/운영진</li>
            </ul>
        `,
        body: `
            <h3>📚 참여 스터디</h3>
            <ul>
                <li><strong>알고리즘</strong> (04~06)</li>
                <li><strong>Python</strong> (04~06)</li>
                <li><strong>프로젝트 개발</strong> (05~08)</li>
                <li><strong>의료 AI</strong> (10~12)</li>
                <li><strong>논문 리뷰</strong> (11~)</li>
            </ul>
            
            <h3>🎓 정규 세미나</h3>
            <ul>
                <li>월 1회 정기 세미나</li>
                <li>초청 연사 특강</li>
            </ul>
            
            <h3>🎯 향후 계획</h3>
            <p>2026년 HYAI 운영진 지원</p>
        `,
        color: '#b8a2c7', tag: 'ACTIVITY'
    },
    
    'HYEND': {
        summary: `
            <h3>💻 HY-END 소개</h3>
            <ul>
                <li><strong>학회:</strong> 한양대 웹 개발 학회</li>
                <li><strong>소속:</strong> ERICA 캠퍼스</li>
                <li><strong>활동:</strong> 2025.09 ~ 12</li>
                <li><strong>등급:</strong> 정회원</li>
            </ul>
            
            <h3>🏆 성과</h3>
            <ul>
                <li>React 프로젝트 3개</li>
                <li>우수 회원 선정</li>
                <li>해커톤 최우수상</li>
            </ul>
        `,
        body: `
            <h3>🎯 React 실무 스터디</h3>
            <ul>
                <li><strong>기간:</strong> 2025.09~12 (16주)</li>
                <li><strong>방식:</strong> 주 1회 세미나</li>
            </ul>
            
            <h3>📚 학습 내용</h3>
            <ul>
                <li><strong>Hooks:</strong> useState, useEffect</li>
                <li><strong>상태:</strong> Redux, Zustand</li>
                <li><strong>라우팅:</strong> React Router v6</li>
                <li><strong>스타일:</strong> Tailwind CSS</li>
            </ul>
            
            <h3>🎯 향후 계획</h3>
            <p>2026년 운영진 지원<br>Next.js, TypeScript 심화</p>
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
    document.getElementById('modalSummary').innerHTML = data.summary;
    document.getElementById('modalBody').innerHTML = data.body;
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