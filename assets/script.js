const navbar = document.getElementById('main-nav');
const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        navbar.classList.add('bg-light');
        navLinks.forEach(link => {
            link.classList.remove('text-white');
        });
    } else {
        navbar.classList.remove('bg-light');
        navLinks.forEach(link => {
            link.classList.add('text-white');
        });
    }
});

window.addEventListener('DOMContentLoaded', function () {
    const toggler = document.querySelector('.navbar-toggler');
    toggler.addEventListener('click', () => {
        if (window.scrollY < 50) {
            navbar.classList.toggle("bg-light")
            navLinks.forEach(link => {
                link.classList.remove('text-white');
            });
        }

    });

})

$(document).ready(function () {
    $('.specialties-slider').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    autoplay: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    autoplay: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    autoplay: true,
                }
            }
        ]
    });
});

$(document).ready(function () {
    $('.blog-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: false,
        infinite: true,
        autoplaySpeed: 2000,
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
        speed: 20000,
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

$(document).ready(function () {
    $('.testimonial-bottom').slick({
        infinite: true,
        speed: 20000,
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

$(document).ready(function () {
    $('.logo-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 2000,
        gap: 20,
        responsive: [
            {
                breakpoint: 992,
                settings: { slidesToShow: 3 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 2 }
            }
        ]
    });
});

$(document).ready(function () {
    $('.video-card').on('click', function () {
        const videoUrl = $(this).data('video'); // Get URL from data attribute
        $('#videoFrame').attr('src', videoUrl);
        $('#videoModal').modal('show');
    });

    // Stop video on modal close
    $('#videoModal').on('hidden.bs.modal', function () {
        $('#videoFrame').attr('src', '');
    });
});


let currentStep = 1;

function showStep(step) {
    document.querySelectorAll('.step').forEach(el => el.classList.remove('active'));
    document.getElementById(`step-${step}`).classList.add('active');
}

function nextStep() {
    if (currentStep === 1) {
        const name = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const mobile = document.getElementById('mobile').value.trim();
        if (!name || !email || !mobile) return alert("Please fill all personal details");
    }

    if (currentStep === 2) {
        const treatment = document.getElementById('treatment').value;
        if (!treatment) return alert("Please select a treatment");
    }

    if (currentStep === 3) {
        const country = document.getElementById('country').value;
        const city = document.getElementById('city').value.trim();
        if (!country || !city) return alert("Please fill location details");

        // Update Review
        document.getElementById('review-name').innerText = document.getElementById('fullName').value;
        document.getElementById('review-email').innerText = document.getElementById('email').value;
        document.getElementById('review-mobile').innerText = document.getElementById('mobile').value;
        document.getElementById('review-treatment').innerText = document.getElementById('treatment').value;
        document.getElementById('review-country').innerText = country;
        document.getElementById('review-city').innerText = city;
    }

    currentStep++;
    showStep(currentStep);
}

function prevStep() {
    if (currentStep > 1) {
        currentStep--;
        showStep(currentStep);
    }
}

function confirmBooking() {
    currentStep++;
    showStep(currentStep);
}

const modal = document.getElementById('appointmentModal');

modal.addEventListener('hidden.bs.modal', () => {
    // Reset step
    currentStep = 1;
    showStep(currentStep);

    // Clear all inputs
    modal.querySelectorAll('input, select').forEach(el => el.value = '');

    // Clear review data
    document.getElementById('review-name').innerText = '';
    document.getElementById('review-email').innerText = '';
    document.getElementById('review-mobile').innerText = '';
    document.getElementById('review-treatment').innerText = '';
    document.getElementById('review-country').innerText = '';
    document.getElementById('review-city').innerText = '';
});