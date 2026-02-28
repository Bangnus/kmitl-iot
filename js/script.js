// ไฟล์สำหรับเขียน JavaScript
document.addEventListener('DOMContentLoaded', () => {
    console.log('Hello! หน้าเว็บและไฟล์ JS โหลดเสร็จเรียบร้อยแล้ว');

    // จัดการเมนู Hamburger สำหรับมือถือ
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    // FontAwesome Icons Wrappers
    const iconMenu = document.getElementById('fa-menu-icon');
    const iconClose = document.getElementById('fa-close-icon');

    let isMenuOpen = false;

    if (btn && menu) {
        btn.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            
            // สลับการแสดงผลเมนู Dropdown
            menu.classList.toggle('hidden');
            
            // สลับไอคอนระหว่าง menu (bars) และ x (xmark)
            if (isMenuOpen) {
                iconMenu.classList.add('hidden');
                iconMenu.classList.remove('flex');
                iconClose.classList.add('flex');
                iconClose.classList.remove('hidden');
            } else {
                iconMenu.classList.add('flex');
                iconMenu.classList.remove('hidden');
                iconClose.classList.add('hidden');
                iconClose.classList.remove('flex');
            }
        });
    }
});
