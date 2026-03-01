// ไฟล์สำหรับเขียน JavaScript
document.addEventListener("DOMContentLoaded", () => {
  console.log("Hello! หน้าเว็บและไฟล์ JS โหลดเสร็จเรียบร้อยแล้ว");

  // จัดการเมนู Hamburger สำหรับมือถือ
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");

  // FontAwesome Icons Wrappers
  const iconMenu = document.getElementById("fa-menu-icon");
  const iconClose = document.getElementById("fa-close-icon");

  let isMenuOpen = false;

  if (btn && menu) {
    btn.addEventListener("click", () => {
      isMenuOpen = !isMenuOpen;

      // สลับการแสดงผลเมนู Dropdown
      menu.classList.toggle("hidden");

      // สลับไอคอนระหว่าง menu (bars) และ x (xmark)
      if (isMenuOpen) {
        iconMenu.classList.add("hidden");
        iconMenu.classList.remove("flex");
        iconClose.classList.add("flex");
        iconClose.classList.remove("hidden");
      } else {
        iconMenu.classList.add("flex");
        iconMenu.classList.remove("hidden");
        iconClose.classList.add("hidden");
        iconClose.classList.remove("flex");
      }
    });
  }
});

// Custom Smooth Scroll to Top Logic
document
  .getElementById("scrollToTopBtn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const startY = window.scrollY;
    const duration = 600;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      // Easing (easeOutQuart)
      const ease = 1 - Math.pow(1 - progress, 4);

      window.scrollTo(0, startY * (1 - ease));

      if (timeElapsed < duration) {
        window.requestAnimationFrame(animation);
      }
    }
    window.requestAnimationFrame(animation);
  });

// Make sure contact is active in mobile menu as well
const currentUrl = window.location.pathname.split("/").pop();
const mobileLinks = document.querySelectorAll("#mobile-menu a");
mobileLinks.forEach((link) => {
  if (link.getAttribute("href") === currentUrl) {
    link.className =
      "bg-orange-600/20 text-primary block px-4 py-3 rounded-md text-base font-medium border-l-4 border-orange-500";
  } else {
    link.className =
      "text-gray-300 hover:bg-gray-800 hover:text-orange-400 block px-4 py-3 rounded-md text-base font-medium transition-colors";
  }
});
