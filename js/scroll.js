// const sections = document.querySelectorAll("section");
// let currentSectionIndex = 0;
// let isScrolling = false;

// function scrollToSection(index) {
//   if (index < 0 || index >= sections.length) return;
//   isScrolling = true;
//   sections[index].scrollIntoView({ behavior: "smooth" });
//   currentSectionIndex = index;
//   setTimeout(() => isScrolling = false, 800); // 스크롤 중에 추가 입력 방지
// }

// function handleScroll(event) {
//   if (isScrolling) return;

//   if (event.deltaY > 0) {
//     // 스크롤 다운
//     scrollToSection(currentSectionIndex + 1);
//   } else if (event.deltaY < 0) {
//     // 스크롤 업
//     scrollToSection(currentSectionIndex - 1);
//   }
// }

// window.addEventListener("wheel", handleScroll);
