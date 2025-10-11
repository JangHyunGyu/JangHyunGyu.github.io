// DOMContentLoaded 이벤트는 HTML 문서가 완전히 파싱되었을 때 발생합니다.
document.addEventListener("DOMContentLoaded", () => {
	// 푸터 연도를 채울 span 요소를 id로 선택합니다.
	const yearEl = document.getElementById("year");
	// 요소가 존재하는 경우에만 값을 업데이트해 오류를 방지합니다.
	if (yearEl) {
		// 현재 연도를 구한 뒤 텍스트 콘텐츠로 삽입합니다.
		yearEl.textContent = new Date().getFullYear();
	}
});
