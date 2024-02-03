(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.nav-bar').addClass('sticky-top');
        } else {
            $('.nav-bar').removeClass('sticky-top');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 24,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:2
            }
        }
    });
    
})(jQuery);

let search_btn = document.getElementById('search-btn');
search_btn.onclick = () => {
    let course = document.getElementById('course').value;
    let state = document.getElementById('state').value;
    let node = document.getElementById('result');

    if ((course === "IIT-JEE" || course === "NEET") && state === "Madhya Pradesh") {
        node.innerHTML = `
            <h1>Results for ${course} in ${state}</h1>
            <p>Maple high street, Narmadapuram Rd, Bawaria kalan, Bhopal, Madhya Pradesh 462026.</p>
            <p>Hill top B'34' Ambara, parasia, Chhindwara, Madhya Pradesh 480449.</p>
            <p>Chhindwara, balaghat, kushinagar, deoria, Rudrapur, mandideep, dabara.</p>
        `;
    } else if ((course === "IIT-JEE" || course === "NEET") && state === "Rajasthan") {
        node.innerHTML = `
            <h3>Results for ${course} in ${state}</h3>
            <p><h5>Office1: </h5>Acacia 1 Urban Woods, Vatika infotech Sanjharia, Jaipur, Rajasthan 302026.</p>
        `;
    } else {
        node.innerHTML = `<h3>Results for ${course} in ${state}</h3>
        <p><h5>Office1: </h5>Maple high street, Narmadapuram Rd, Bawaria kalan, Bhopal, Madhya Pradesh - 462026.</p>
        <p><h5>Office2: </h5>Hill Top B'34' Ambara, Parasia, Chhindwara, Madhya Pradesh - 480449.</p>
        <p><h5>Office3: </h5>Chhindwara, Balaghat, Kushinagar, Deoria, Rudrapur, Mandideep, Dabara.</p>`;
    }
};

