// إعداد الجزيئات (نفس الموقع الأصلي)
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 70, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#ffffff" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.3 },
        "size": { "value": 2 },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#c5a059",
            "opacity": 0.2,
            "width": 1
        },
        "move": { "enable": true, "speed": 1.5 }
    }
});

// تأثير الكتابة للنص الرئيسي
new TypeIt("#typewriter", {
    strings: ["بوابة وزارة العدل"],
    speed: 80,
    loop: true,
    cursor: false
}).go();
