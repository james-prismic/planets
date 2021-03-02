// PARALLAX

let scene = document.getElementById('scene');
let paraInstance = new Parallax(scene);

// SWIPER INIT

let keys = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune"
];
let slider = new Swiper(".swiper-container", {
      // Optional parameters
    slidesPerView: "auto",
    spaceBetween: 150,
    centeredSlides: true,
    mousewheel: true,
    pagination: {
        el: ".planet-links",
        clickable: true,
        renderBullet: function (index, className) {
            return '<div class="' + className + '">' + keys[index] + "</div>";
        }
    }
})

// SLIDE ANIMATIONS USING GSAP

slider.on("slideChange", function () {
    console.log("SLIDE CHANGED");
    gsap.to(".slide-text span", 0.2, {
        x: "-120px"
    });
    gsap.to(".slide-number span", 0.2, {
        x: "-160px"
    });
    gsap.to(".slide-detail span", 0.5, {
        x: "-1000px"
    });
    gsap.to(".slide-detail-facts div", 0.5, {
        x: "-1000px"
    });
    gsap.to(".swiper-slide-active", 0.5, {
        scale: 0.85
    });
    gsap.to(".swiper-slide .slide-img", 1, {
        rotation: 20
    });
});

slider.on("slideChangeTransitionEnd", function () {
    gsap.to(".swiper-slide .slide-img", 1, {
        rotation: 10
    });
    gsap.to(".slide-text span", 0.2, {
        x: 0,
        delay: 0.1
    });
    gsap.to(".slide-text span", 0, {
        x: "100px"
    });

    gsap.to(".slide-number span", 0.2, {
        x: 0
    });
    gsap.to(".slide-number span", 0, {
        x: "100px"
    });

    gsap.to(".slide-detail span", 0.2, {
        x: 0
    });

    gsap.to(".slide-detail-facts div", 0.5, {
        x: 0
    });

    gsap.to(".swiper-slide-active", 0.5, {
        scale: 1,
        ease: Power4.easeOut
    });

    gsap.to(".swiper-slide-active .slide-text", 0, {
        autoAlpha: 1
    });
    gsap.to(".swiper-slide-active .slide-number", 0, {
        autoAlpha: 1
    });

    gsap.to(".swiper-slide-next .slide-text", 0, {
        autoAlpha: 0
    });
    gsap.to(".swiper-slide-prev .slide-text", 0, {
        autoAlpha: 0
    });

    gsap.to(".swiper-slide-next .slide-number", 0, {
        autoAlpha: 0
    });
    gsap.to(".swiper-slide-prev .slide-number", 0, {
        autoAlpha: 0
    });
});

gsap.to(".rockbg1", 2, {
    y: 12,
    repeat: -1,
    yoyo: true,
    delay: 0
});

gsap.to(".swiper-slide-next .slide-text", 0, {
    autoAlpha: 0
});
gsap.to(".swiper-slide-prev .slide-text", 0, {
    autoAlpha: 0
});

gsap.to(".swiper-slide-next .slide-number", 0, {
    autoAlpha: 0
});
gsap.to(".swiper-slide-prev .slide-number", 0, {
    autoAlpha: 0
});

gsap.to(".swiper-slide", 0, {
    scale: 0.85
});

gsap.to(".swiper-slide-active", 0, {
    scale: 1
});


gsap.registerPlugin(ScrollTrigger);

function goToSection(i, anim) {
  gsap.to(window, {
    scrollTo: {y: i*innerHeight, autoKill: false},
    duration: 1
  });
  
  if(anim) {
    anim.restart();
  }
}

gsap.utils.toArray(".screen").forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    onEnter: () => goToSection(i)
  });
  
  ScrollTrigger.create({
    trigger: panel,
    start: "bottom bottom",
    onEnterBack: () => goToSection(i),
  });
});

gsap.to('progress', {
  value: 100,
  ease: 'none',
  scrollTrigger: { scrub: 0.3 }
});

// $(document).ready(function () {
//     $.scrollify({
//         section : "section",
//         sectionName : "section-name",
//         interstitialSection : "",
//         easing: "easeOutExpo",
//         scrollSpeed: 1100,
//         offset : 0,
//         scrollbars: true,
//         standardScrollElements: "",
//         setHeights: true,
//         overflowScroll: true,
//         updateHash: true,
//         touchScroll:true,
//         before:function() {},
//         after:function() {},
//         afterResize:function() {},
//         afterRender:function() {}
//     });

//     $.scrollify({
//         section: '.screen',
//         interstitialSection: '.normal-scroll',
//         offset: 10,
//         scrollbars: true,
//         updateHash: false,
//         setHeights: true,
//         standardScrollElements: true,
//         overflowscroll: true,
//         before: function (i, panels) {},
//         after:function() {},
//         afterResize:function() {},
//         afterRender:function() {}
//     });
// });