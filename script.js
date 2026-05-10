// إعداد خلفية النجوم المتحركة
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 70 },
        "color": { "value": "#ffffff" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.2 },
        "size": { "value": 2 },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#c5a059",
            "opacity": 0.1,
            "width": 1
        },
        "move": { "enable": true, "speed": 1.2 }
    }
});

// تأثير الكتابة (تم حذف العبارة العسكرية)
new TypeIt("#typewriter", {
    strings: ["وزارة العدل", "العدالة فوق الجميع"],
    speed: 100,
    loop: true,
    cursor: false
}).go();

// عداد الزوار التلقائي
let count = localStorage.getItem('visit_count');
if (count === null) {
    count = 1; // يبدأ من 1 لأول مرة
} else {
    count = parseInt(count) + 1;
}
localStorage.setItem('visit_count', count);
document.getElementById('visitor-count').innerText = count;
