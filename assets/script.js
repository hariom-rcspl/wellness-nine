$(document).ready(function () {
    $('.blog-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: false,
        infinite: true,
        gap: 20,
        responsive: [
            {
                breakpoint: 992,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 }
            }
        ]
    });
});

$(document).ready(function () {
    $('.testimonial-top').slick({
        infinite: true,
        speed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        pauseOnHover: true,
        arrows: false,
        dots: false,
        // rtl: true
    });
});

$(document).ready(function () {
    $('.testimonial-bottom').slick({
        infinite: true,
        speed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        pauseOnHover: true,
        arrows: false,
        dots: false,
    });
});

var map = L.map('map', {
    zoomControl: false,     // Disable + / - buttons
    scrollWheelZoom: false, // Disable scroll wheel zoom
    doubleClickZoom: false, // Disable double-click zoom
    // dragging: false,        // Disable dragging (optional)
    touchZoom: false        // Disable pinch zoom on touch devices
}).setView([22.9734, 78.6569], 4); 

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

var locations = [
    { name: "Ahmedabad", coords: [23.0225, 72.5714], doctors: "20+", hospitals: "5+" },
    { name: "Mumbai", coords: [19.0760, 72.8777], doctors: "25+", hospitals: "15+" },
    { name: "Bengaluru", coords: [12.9716, 77.5946], doctors: "30+", hospitals: "25+" }
];

locations.forEach(loc => {
    L.marker(loc.coords).addTo(map)
        .bindPopup(`<b>${loc.name}</b><br>${loc.doctors} doctors<br>${loc.hospitals} hospitals`);
});