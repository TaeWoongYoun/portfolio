/**
 * 책 열기: spine(책등)이 화면 정중앙에 오도록 계산된 3D 애니메이션 실행
 */
function openBook(title, color) {
    const modal = document.getElementById('bookModal');
    const titleCover = document.getElementById('modalTitleCover');
    const titleInside = document.getElementById('modalTitleInside');
    const cover = document.getElementById('modalCover');

    // 데이터 주입
    titleCover.innerText = title;
    titleInside.innerText = title;
    cover.style.backgroundColor = color;

    // 모달 활성화
    modal.style.display = 'flex';
    
    // 약간의 지연 후 애니메이션 클래스 추가 (브라우저 렌더링 동기화)
    requestAnimationFrame(() => {
        modal.classList.add('open');
    });
}

/**
 * 책 닫기
 */
function closeBook() {
    const modal = document.getElementById('bookModal');
    modal.classList.remove('open');
    
    // 애니메이션 시간(0.8s) 후 display: none
    setTimeout(() => {
        modal.style.display = 'none';
    }, 800);
}

// 배경 클릭 시 닫기
window.onclick = function(event) {
    const modal = document.getElementById('bookModal');
    if (event.target == modal) {
        closeBook();
    }
}