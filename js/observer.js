document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector("header");
    const sections = document.querySelectorAll("section"); 
  
    // Intersection Observer 옵션 설정
    const observerOptions = {
      root: null,          // 기본값으로 뷰포트 사용
      threshold: 0.5,      
      rootMargin: "0px"    // 추가적인 여백 없음
    };

    const specificObserverOptions = {
      root: null,
      threshold: 0.1,
      rootMargin: "0px"
    };
  
    const specificObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.target.id === "sec1" && entry.isIntersecting) {
          header.style.opacity = .7;
          setTimeout(() => {
            document.querySelector("#sec1 p").classList.add('show');
          }, 3000)
        } 

        
        if(entry.target.classList.contains("sec2_2") && entry.isIntersecting) {
          document.querySelector(".sec2_2_1.one").style.animation = "left_show .5s ease-in-out forwards";
          document.querySelector(".sec2_2_1.two").style.animation = "right_show .5s ease-in-out forwards";
      }
      
      if(entry.target.classList.contains("sec2_3_0") && entry.isIntersecting) {
        document.querySelector(".sec2_3_0").style.opacity = "1";
     } else {
      //  document.querySelector(".sec2_3_0").style.opacity = "0";
     }
      });
    }, specificObserverOptions);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // sec2 섹션에 대한 인터랙션
        if (entry.target.id === "sec2" && entry.isIntersecting) {
          console.log("sec2가 보입니다.");
          // sec2가 화면에 나타날 때 수행할 다른 동작들 추가
        }

        if(entry.target.classList.contains("sec2_1") && entry.isIntersecting) {
          document.querySelector("#sec2 .sec2_1 .content_box.one .graph_box_box .graph.one").style.width = "50%";
          document.querySelector("#sec2 .sec2_1 .content_box.one .graph_box_box .graph.two").style.width = "32%";
          document.querySelector("#sec2 .sec2_1 .content_box.one .graph_box_box .graph.three").style.width = "18%";

          document.querySelector("#sec2 .sec2_1 .content_box.two .graph_box_box .graph.one").style.width = "84%";
          document.querySelector("#sec2 .sec2_1 .content_box.two .graph_box_box .graph.two").style.width = "12%";
          document.querySelector("#sec2 .sec2_1 .content_box.two .graph_box_box .graph.three").style.width = "4%";
        }else {
          //이거 할지 말지 고민
          document.querySelectorAll("#sec2 .sec2_1 .graph_box .graph").forEach(graph => {
            graph.style.width = "0%";
          });
        }


        
      if(entry.target.classList.contains("sec2_3") && entry.isIntersecting) {
        document.querySelector(".book-wrap").style.opacity = "1";
     }
     if(entry.target.classList.contains("sec3_1") && entry.isIntersecting) {
      // document.querySelector(".text_box").style.animation = "right_show .5s ease-in-out forwards";
      let main = document.querySelector(".main_house");
      let house1 = document.querySelector(".house.right");
      let house2 = document.querySelector(".house.left");
      let girl = document.querySelector(".girl");
      let bi = document.querySelector(".bi");
      let grass = document.querySelector(".grass");

      house1.style.top = 'calc(50% - 18vw)';
      setTimeout(() => {
        house2.style.top = 'calc(50% - 18vw)';
        setTimeout(() => {
          main.style.top = 'calc(50% - 15vw)';
          setTimeout(() => {
            grass.style.top = 'calc(50% + 13vw)';
            setTimeout(() => {
              bi.style.top = 'calc(50% + 10vw)';
              setTimeout(() => {
                girl.style.top = 'calc(50% + 4vw)';
                setTimeout(() => {
                  document.querySelector("#sec3 .sec3_1 .img_box").style.animation = 'forwards sec3_img_box 3s ease';
                  house1.style.animation = 'alternate forwards house_right 3s ease-in-out';
                  house2.style.animation = 'alternate forwards house_left 3s ease-in-out';
                  girl.style.animation = 'alternate forwards girl 3s ease-in-out';
                  bi.style.animation = 'alternate forwards bi 3s ease-in-out';
                  grass.style.animation = 'alternate forwards grass 3s ease-in-out';
  
                  setTimeout(() => {
                    document.querySelector("#sec3 .sec3_1 .text_box").style.opacity = '1';
                  }, 3500)
              }, 1200)

             
              }, 200)

            }, 200)
          }, 200);
        }, 500);
      }, 500);

   }
      if(entry.target.classList.contains("sec4_1") && entry.isIntersecting) {
        document.querySelector(".sec4_1 .unity").style.animation = "show .5s ease-in-out forwards";
        document.querySelector(".sec4_1 .meta").style.animation = "show .5s ease-in-out forwards";
     } 

      });
    }, observerOptions);
  
    // 모든 섹션을 관찰
    sections.forEach(section => {
      observer.observe(section);
    });
    // sec1을 specificObserver에 추가
    document.querySelector("#sec1") && specificObserver.observe(document.querySelector("#sec1"));
    document.querySelector(".sec2_2") && specificObserver.observe(document.querySelector(".sec2_2"));
    document.querySelector(".sec2_3_0") && specificObserver.observe(document.querySelector(".sec2_3_0"));

    // 다른 섹션을 observer에 추가
    sections.forEach(section => {
      if (section.id !== "sec1") {
        observer.observe(section);
      }
    });
  });


  
  
