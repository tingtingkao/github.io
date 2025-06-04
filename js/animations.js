
    gsap.registerPlugin(ScrollTrigger, TextPlugin, ScrollToPlugin);

    // 🔹 導覽列點擊滾動效果
    document.querySelectorAll("nav a").forEach((link) => {
      link.addEventListener("click", () => {
        const targetId = link.getAttribute("data-target");
        gsap.to(window, {
          duration: 1,
          scrollTo: `#${targetId}`,
          ease: "power2.out",
        });
      });
    });

    // 🔹 首頁動畫
    gsap.from(".pc_block", {
      duration: 1,
      y: -600,
      opacity: 0,
      ease: "bounce.out",
    });

    gsap.from(".m_block", {
      duration: 1,
      y: -600,
      opacity: 0,
      ease: "bounce.out",
    });

    gsap.to("#typewriter01", {
      text: "a UI/UX designer",
      duration: 2,
      delay: 1,
    });


    // 🔹 第二頁滑入動畫
    gsap.from("#picplay01", {
    scrollTrigger: {
    trigger: "#picplay01",
    start: "top 80%",
    toggleActions: "play none none reverse",
        },
    y: 100,
    opacity: 0,
    duration: 1,
    });

    gsap.from("#picplay02", {
    scrollTrigger: {
    trigger: "#picplay02",
    start: "top 80%",
    toggleActions: "play none none reverse",
        },
    y: 100,
    opacity: 0,
    duration: 1,
    });

    gsap.from("#picplay03", {
    scrollTrigger: {
    trigger: "#picplay03",
    start: "top 80%",
    toggleActions: "play none none reverse",
        },
    y: 100,
    opacity: 0,
    duration: 1,
    });

    gsap.from("#picplay04", {
    scrollTrigger: {
    trigger: "#picplay04",
    start: "top 80%",
    toggleActions: "play none none reverse",
        },
    y: 100,
    opacity: 0,
    duration: 1,
    });


    gsap.to("#typewriter02", {
      text: "UI/UX Case Study",
      duration: 3,
      delay: 5,
    });  

    gsap.from("#pic_test02", {
      scrollTrigger: {
        trigger: "#pic_test02",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      y: 100,
      opacity: 0,
      duration: 1,
    });

    gsap.from("#pic_test01", {
      scrollTrigger: {
        trigger: "#pic_test01",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      y: 100,
      opacity: 0,
      duration: 1,
    });

    gsap.to("#typewriter03", {
      text: "Marketing Case Study",
      duration: 3,
      delay: 12,
    });  

