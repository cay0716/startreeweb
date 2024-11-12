document.querySelector("header .logo_box").addEventListener("click", (e) => {
  document.querySelector("#sec0").scrollIntoView({ behavior: "smooth" });
});
document.querySelector("#menu1").addEventListener("click", (e) => {
    document.querySelector("#sec1").scrollIntoView({ behavior: "smooth" });
  });
  document.querySelector("#menu2").addEventListener("click", (e) => {
    document.querySelector("#sec2").scrollIntoView({ behavior: "smooth" });
  });
  document.querySelector("#menu3").addEventListener("click", (e) => {
    document.querySelector("#sec3").scrollIntoView({ behavior: "smooth" });
  });
  document.querySelector("#menu4").addEventListener("click", (e) => {
    document.querySelector("#sec4").scrollIntoView({ behavior: "smooth" });
  });
  document.querySelector("#menu5").addEventListener("click", (e) => {
    document.querySelector("#sec5").scrollIntoView({ behavior: "smooth" });
  });

setTimeout(() => {
  document.querySelector(".tree_backback").style.filter = "blur(4.5px)";
  document.querySelector(".tree_background").style.filter = "blur(3.5px)";
  document.querySelector(".tree_background").style.transform = "scale(0.99)";
  document.querySelector(".tree_left").style.filter = "blur(0px)";
  document.querySelector(".tree_right").style.filter = "blur(1.5px)";

  document.querySelector(".tree_left").style.transform = "scale(1.06)";
  document.querySelector(".tree_right").style.transform = "scale(1.07)";
}, 1000)

setTimeout(() => {
  document.querySelector("#tree").style.opacity = "1";
  document.querySelector("#text").style.opacity = "1";
}, 1700)
document.querySelectorAll(".star .cls-1").forEach((element, index) => {
  setTimeout(() => {
      element.style.animation = "star 2.5s ease forwards";
  }, 3000); // 각 요소마다 2초씩 지연
});
setTimeout(() => {
    document.querySelector("#circle_line .cls-1").style.animation = "line 2.5s ease forwards";
}, 4000)
setTimeout(() => {
    document.querySelector("#light1 .cls-1").style.animation = "opacity 3s ease forwards";
}, 6000)

let content_box = document.querySelector(".sec4_2 .content_box");

document.querySelector(".sec4_2 .content_box ul li.one").addEventListener("click", () => {
  content_box.style.backgroundImage = "url('css/img/cotroller01.jpg')";
})
document.querySelector(".sec4_2 .content_box ul li.two").addEventListener("click", () => {
  content_box.style.backgroundImage = "url('css/img/cotroller02.gif')";
})
document.querySelector(".sec4_2 .content_box ul li.three").addEventListener("click", () => {
  content_box.style.backgroundImage = "url('css/img/cotroller03.jpg')";
})
document.querySelector(".sec4_2 .content_box ul li.four").addEventListener("click", () => {
  content_box.style.backgroundImage = "url('css/img/cotroller04.jpg')";
})






  
history.scrollRestoration = "manual"
/* 객실안내 마우스 커서[s] */
var cursor = document.querySelector(".cursor");
var img_slide = document.querySelectorAll(".night_sky");
function cursorEvent(e){
    cursor.style.top = e.pageY - scrollY + "px";
    cursor.style.left = e.pageX + "px";
}
window.addEventListener('mousemove', cursorEvent);
img_slide.forEach(link =>{
    if ( link !== img_slide ){
        link.addEventListener("mouseleave", () => {
            cursor.classList.remove("on");
        });
        link.addEventListener("mouseover", () => {
            cursor.classList.add("on");
        });
    }  
});
/* 마우스 커서[e] */
