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
searchInputEl.addEventListener('focus', function () {
  searchInputEl.setAttribute("placeholder", "통합검색");
  searchEl.classList.add('focused');
})

// addEventListener - focus 감지
// setattribute() 사용

// input 요소에 포커스가 해제(blur)되면 placeholder 초기화
searchInputEl.addEventListener('blur', function () {
  searchInputEl.setAttribute("placeholder", "");
  searchEl.classList.remove('focused');
})

// addEventListener - blur 감지
// setattribute() 사용

// 스크롤 시 전역배지(고정 배너) 숨기기
const BadgeR1 = document.querySelector('header .badges');

// 페이지에 스크롤 이벤트 감지를 추가!
// window: 브라우저 창 객체
const BadgeE1 = document.querySelector('header .badges');
window.addEventListener('scroll', function () {
  console.log(window.scrollY); //(y축으로 얼마나 스크롤 했는지) 페이지 스크롤 위치


// quiz:
// 페이지 스크롤 위치가 500px을 넘으면 배지 요소를 숨기고.
// 페이지 스크롤 위치가 500px을 넘지 않으면 배지 요소 보이기!
//style.color = 'red'; 카멜케이스 사용!!

if (window.scrollY > 500) {
  // BadgeE1.style.display = 'none';
  // BadgeE1.style.opacity = 0;
  // BadgeE1.style.visibility = 'hidden';

  // gsap.to (요소, 지속시간, 옵션: {}) 메소드: css 속성을 통해 애니메이션 처리
  // 아래 옵션으로만 실행!!
  gsap.to(BadgeE1, 0.6, {
    opacity: 0,
    diplay: 'none'
  });
} else {
  // BagdeE1.style.display = 'block';
  // BadgeE1.style.opacity = 1;
  // BadgeE1.style.visibility = 'visible';
  // 트랜지션 추가시 css 스타일도 추가 

  gsap.to(BadgeE1, 0.6, {
    opacity: 1,
    diplay: 'block'
  });
}
});

// 순차적으로 VISUAL 섹션 내 요소 보이기
// 나타날 요소(.fade-in)들을 찾기
const fadeEls = document.querySelectorAll('.visual .fade-in');
console.log(fadeEls);
fadeEls.forEach(function (fadeEl, index) {
  // gsap.to(요소, 지속시간, 옵션: {})
  gsap.to(fadeEl, 1, {
    opacity: 1,
    delay: 0.7 * (index + 1) // 0.7s, 1.4s, 2.1s, 2.8s
  });
});

// 공지사항 수직 슬라이드 기능
// new 키워드로 swiper 객체를 생성 => 슬라이드 기능을 생성
// new swiper(요소, 옵션: {});
// 첫번째 인수: 슬라이드 기능을 적용할 요소의 선택자
// 두번째 인수: 다양한 옵션을 객체 데이터로 전달(API 페이지 참고)
new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical', // 수직 슬라이드 수평:hrizontal
  loop: true, // 반복 재생 여부, 12341234~
  autoplay: true // 자동 재생 여부
});