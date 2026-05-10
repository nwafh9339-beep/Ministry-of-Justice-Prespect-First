// إعداد الخلفية المتحركة (الجزيئات)
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 80 },
        "color": { "value": "#ffffff" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.2 },
        "size": { "value": 2 },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#1e3a8a",
            "opacity": 0.2,
            "width": 1
        },
        "move": { "enable": true, "speed": 1.2 }
    }
});

// تأثير الكتابة
new TypeIt("#typing-text", {
    strings: ["وزارة العدل", "التحقيقات الجنائية"],
    speed: 100,
    loop: true,
    nextStringDelay: 2500
}).go();
