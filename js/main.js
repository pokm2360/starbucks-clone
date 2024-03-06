// 검색 영역(.search) 클릭 시 input에 강제 포커스 및 제어
// 검색 영역 div와 input 찾기
const searchEl = document.querySelector('.search');
console.log(searchEl);
// const searchEl = document.querySelector('input');
// 아래와 같이 최적화
const searchInputEl = searchEl.querySelector('input');

// 검색 영역을 클릭하면 input 요소를 포커스하도록 실행
searchEl.addEventListener('click', function () { // 이벤트 핸들러
  searchInputEl.focus(); // 요소에 포커스 강제 적용
})


// input 요소에 포커스(focus)되면 placeholder 추가
// addEventListener - focus 감지
// setattribute() 사용

// input 요소에 포커스가 해제(blur)되면 placeholder 초기화
// addEventListener - blur 감지
// setattribute() 사용