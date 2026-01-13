function toggleMenu() {
    document.getElementById('slide-menu').classList.toggle('active');
}

const bookData = {
    // 1층 개인 프로젝트
    'WLMS': {
        summary: 'React + Node.js 기반 기능반 교육 관리 시스템',
        body: '<p>기능반 후배들을 위한 종합 학습 플랫폼입니다.</p><ul><li>React, Node.js, MySQL 기반 풀스택 구축</li><li>GitHub API 연동을 통한 잔디 시각화</li><li>과제 제출 및 멘토 피드백 게시판 시스템</li></ul><a href="https://github.com/TaeWoongYoun/LMS" target="_blank">🔗 GitHub 보러가기</a>',
        color: '#e58a7d', tag: 'INDIVIDUAL'
    },
    'KPI': {
        summary: 'Java 기반 핵심성과지표(KPI) 관리 시스템',
        body: '<p>기업 성과 지표를 관리하는 데스크톱 애플리케이션입니다.</p><ul><li>Java Swing UI 및 JDBC 연동</li><li>부서별 KPI 가중치 및 달성도 계산 알고리즘</li></ul><a href="https://github.com/TaeWoongYoun/KPI" target="_blank">🔗 GitHub 보러가기</a>',
        color: '#74a4bc', tag: 'INDIVIDUAL'
    },
    'Algorithm': {
        summary: '코딩테스트 대비 알고리즘 풀이 저장소',
        body: '<p>프로그래머스 및 백준 알고리즘 문제 풀이 아카이브입니다.</p><ul><li>JavaScript 및 Java 언어 활용</li><li>DFS/BFS, DP, 그리디 등 유형별 정리</li></ul><a href="https://github.com/TaeWoongYoun/programmers-algorithm" target="_blank">🔗 GitHub 보러가기</a>',
        color: '#a8c69f', tag: 'INDIVIDUAL'
    },
    'AIX': {
        summary: 'AIX 융합수업: R과 Python 데이터 분석',
        body: '<p>데이터 분석 실습 및 시각화 저장소입니다.</p><ul><li>R (ggplot2, dplyr) 활용 통계 분석</li><li>Python 머신러닝 기초 실습</li></ul><a href="https://github.com/TaeWoongYoun/AIX-R-Py-Repo" target="_blank">🔗 GitHub 보러가기</a>',
        color: '#b8a2c7', tag: 'INDIVIDUAL'
    },
    'Django': {
        summary: 'Django Framework 기반 웹 애플리케이션',
        body: '<p>Python Django를 활용한 커뮤니티형 웹 서비스입니다.</p><ul><li>MVT 패턴 설계 및 DB 마이그레이션</li><li>사용자 인증 및 CRUD 게시판 구현</li></ul><a href="https://github.com/TaeWoongYoun/DjangoProject" target="_blank">🔗 GitHub 보러가기</a>',
        color: '#f2cc8f', tag: 'INDIVIDUAL'
    },
    'IE': {
        summary: '정보처리산업기사 실기 대비 학습 내용',
        body: '<p>자격증 취득을 위한 이론 및 프로그래밍 연습 코드입니다.</p><ul><li>SQL 활용 및 애플리케이션 설계 정리</li><li>자바/C 프로그래밍 언어 문법 정리</li></ul><a href="https://github.com/TaeWoongYoun/IndustrialEngineer" target="_blank">🔗 GitHub 보러가기</a>',
        color: '#e58a7d', tag: 'INDIVIDUAL'
    },
    'Modbus': {
        summary: 'Modbus Protocol 통신 제어 프로젝트',
        body: '<p>산업용 통신 규약 Modbus를 활용한 기기 제어 실습입니다.</p><ul><li>Python pymodbus 라이브러리 활용</li><li>TCP/RTU 통신 환경 구축 및 모니터링</li></ul><a href="https://github.com/TaeWoongYoun/modbus_project" target="_blank">🔗 GitHub 보러가기</a>',
        color: '#74a4bc', tag: 'INDIVIDUAL'
    },
    'Winter': {
        summary: '겨울방학 전공 세션 학습 아카이브',
        body: '<p>방학 기간 동안 집중 학습한 기술 스택 정리입니다.</p><ul><li>다양한 CS 기초 및 웹 기술 실습</li></ul><a href="https://github.com/TaeWoongYoun/WinterSession" target="_blank">🔗 GitHub 보러가기</a>',
        color: '#a8c69f', tag: 'INDIVIDUAL'
    },

    // 2층 팀 프로젝트
    'Progate': {
        summary: 'Progate Hackathon in Seoul 🥈 준우승',
        body: '<p>팀 사차원 감자들이 구축한 교육 매칭 서비스입니다.</p><ul><li>React, Firebase 기반 실시간 플랫폼</li><li>사용자 맞춤 교육 로드맵 제공 기능</li></ul><a href="https://github.com/Four-potatoes/ProgateHackathon" target="_blank">🔗 GitHub 보러가기</a>',
        color: '#b8a2c7', tag: 'TEAM'
    },
    'Patch': {
        summary: 'EV3 Lego: 패치 획득 전략 게임',
        body: '<p>레고 마인드스톰 EV3 로봇을 이용한 자율 주행 게임입니다.</p><ul><li>센서 기반 맵 인식 및 패치 수집 알고리즘</li></ul><a href="https://github.com/EV3Team/PatchAcquisitionGame" target="_blank">🔗 GitHub 보러가기</a>',
        color: '#74a4bc', tag: 'TEAM'
    },
    'Sensor': {
        summary: '스마트 센서 및 인터페이싱 실습',
        body: '<p>다양한 하드웨어 센서 데이터를 수집하고 처리하는 프로젝트입니다.</p><a href="https://github.com/EV3Team/smart-sensors-assignments" target="_blank">🔗 GitHub 보러가기</a>',
        color: '#e58a7d', tag: 'TEAM'
    },
    'MCA': {
        summary: 'MCA: ICT 통합 모바일 제어 앱',
        body: '<p>모바일 기반의 통합 제어 시스템 구축 팀 프로젝트입니다.</p><a href="https://github.com/ICT-Top-Bottom/MCA" target="_blank">🔗 GitHub 보러가기</a>',
        color: '#a8c69f', tag: 'TEAM'
    },
    'Suin': {
        summary: '수인분당선 열차 정보 알림 서비스',
        body: '<p>수인분당선 실시간 열차 정보를 시각화한 서비스입니다.</p><a href="https://github.com/SuinBundang/SuinBundang" target="_blank">🔗 GitHub 보러가기</a>',
        color: '#f2cc8f', tag: 'TEAM'
    },
    'WebApplication': {
        summary: '한양대 드림팀: 범용 웹 애플리케이션',
        body: '<p>실생활에 유용한 범용 웹 서비스 아키텍처 설계 및 구현 프로젝트입니다.</p><a href="https://github.com/HYU-DreamTeam/WebApplication" target="_blank">🔗 GitHub 보러가기</a>',
        color: '#b8a2c7', tag: 'TEAM'
    },
    'DataAnalysis': {
        summary: 'Counting Stars: 데이터 분석 프로젝트',
        body: '<p>공공 데이터를 활용한 사회 현상 분석 및 통계 레포트입니다.</p><a href="https://github.com/TeamCountingStars/dataAnalysis" target="_blank">🔗 GitHub 보러가기</a>',
        color: '#e58a7d', tag: 'TEAM'
    },

    // 3층 대외활동
    'Cert': {
        summary: '국가 기술 자격증 취득 사항',
        body: '<ul><li>정보처리산업기사 (2024.12)</li><li>웹디자인개발기능사 (2025.01)</li></ul>',
        color: '#f2cc8f', tag: 'ACTIVITY'
    },
    'Paper': {
        summary: 'KCC 2025 학부생 논문 작성 (제 1저자)',
        body: '<p>제목: AI기반 사용자 맞춤형 공지사항 통합 알림 시스템 설계</p><ul><li>작성시기: 2025.07</li><li>주요내용: 개인화된 푸시 알림 로직 설계</li></ul>',
        color: '#e58a7d', tag: 'ACTIVITY'
    },
    'Hackathon': {
        summary: '해커톤 수상 실적',
        body: '<p>Progate Hackathon in Seoul 🥈 준우승 (2025.11)</p><p>팀명: 사차원 감자들</p>',
        color: '#74a4bc', tag: 'ACTIVITY'
    },
    'Academic': {
        summary: '한양대학교 학술대회 참가',
        body: '<p>2025 한양대학교 SW/ICT/AI 종합학술대회 참가</p><ul><li>참가 세션: 404 Not Found Session</li><li>참가 프로젝트: W-LMS</li></ul>',
        color: '#a8c69f', tag: 'ACTIVITY'
    },
    'HYAI': {
        summary: 'HYAI 인공지능 학회 스터디 내역',
        body: '<ul><li>알고리즘 스터디 (25.04~06)</li><li>Python 스터디 (25.04~06)</li><li>프로젝트 개발 스터디 (25.05~08)</li><li>의료 AI 스터디 (25.10~12)</li><li>논문 리뷰 스터디 (25.11~)</li></ul>',
        color: '#b8a2c7', tag: 'ACTIVITY'
    },
    'HYEND': {
        summary: 'HY-END 웹개발 학회 활동',
        body: '<ul><li>HY-END 웹개발 학회 정회원 (25.09~12)</li><li>React 프레임워크 실무 스터디 참여</li></ul>',
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
    document.getElementById('modalSummary').innerHTML = `<p>${data.summary}</p>`;
    document.getElementById('modalBody').innerHTML = data.body;
    document.getElementById('modalCover').style.backgroundColor = data.color;

    modal.style.display = 'flex';
    // 강제 리플로우를 발생시켜 브라우저가 display: flex를 먼저 인지하도록 함
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

// 배경 클릭 시 닫기
window.onclick = (e) => {
    const modal = document.getElementById('bookModal');
    if (e.target === modal) closeBook();
};