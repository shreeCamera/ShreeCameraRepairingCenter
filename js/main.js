(function ($) {
    "use strict";

    // Initialize WOW.js safely
    if (typeof WOW !== 'undefined') {
        new WOW().init();
    }

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });

    // Dropdown on hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

    // Testimonials carousel
    if ($.fn.owlCarousel) {
        $(".testimonial-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 1500,
            margin: 45,
            dots: true,
            loop: true,
            center: true,
            responsive: {
                0: { items: 1 },
                576: { items: 1 },
                768: { items: 2 },
                992: { items: 3 }
            }
        });
    }

})(jQuery);

// WhatsApp Appointment Script
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("appointmentForm");
    const note = document.getElementById("whatsappNote");
    const OWNER_NUMBER = "919793677725"; // <-- yahan apna WhatsApp number daalein (91 ke sath)

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const model = document.getElementById("model").value.trim();
            const date = document.getElementById("date").value.trim();
            const issue = document.getElementById("issue").value.trim();

            const appointmentId = Math.floor(1000 + Math.random() * 9000);

            const message = `
📸 *New Camera Repair Appointment Request*
----------------------------------------
👤 Name: ${name}
📞 Phone: ${phone}
📷 Model: ${model}
📅 Date: ${date}
⚙️ Issue: ${issue}
🔢 Appointment ID: #${appointmentId}
----------------------------------------
Thank you for choosing *Shree Camera Repairing Center*.
`;

            const waUrl = `https://wa.me/${OWNER_NUMBER}?text=${encodeURIComponent(message)}`;
            window.open(waUrl, "_blank");

            if (note) note.classList.remove("d-none");
        });
    }
});
