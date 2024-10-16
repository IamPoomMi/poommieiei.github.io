function handleScroll() {
    const elements = document.querySelectorAll('.zoom-in'); // เปลี่ยนเป็น .zoom-in
    const windowHeight = window.innerHeight;
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            element.classList.add('show');
        }
    });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);

document.addEventListener("DOMContentLoaded", () => {
    const sliders = document.querySelectorAll(".zoom-in"); // ยังคงใช้ .zoom-in

    const appearOptions = {
        threshold: 0.1, // แสดงเมื่อมี 10% ของส่วนประกอบที่เลื่อนเข้ามา
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(
        entries, 
        appearOnScroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add("show");
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    sliders.forEach(slider => {
        appearOnScroll.observe(slider);
    });
});
