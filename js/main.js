(function ($) {
    "use strict";

    // Initiate WOW.js
    new WOW().init();

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });

})(jQuery);

    
    // Dropdown on mouse hover
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
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 45,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

// book appointment code
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("appointmentForm");
  const note = document.getElementById("whatsappNote");

  const OWNER_NUMBER = "919793677725"; // <-- Owner ka WhatsApp number (country code ke saath)

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Form values
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const model = document.getElementById("model").value.trim();
    const date = document.getElementById("date").value.trim();
    const issue = document.getElementById("issue").value.trim();

    // Generate appointment ID
    const appointmentId = Math.floor(1000 + Math.random() * 9000);

    // WhatsApp message text
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

    // WhatsApp URL (best compatibility for mobile + desktop)
    const waUrl = `https://wa.me/${OWNER_NUMBER}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp chat
    window.open(waUrl, "_blank");

    // Show info message to user
    note.classList.remove("d-none");
  });
});




// Handle form submission
document.getElementById("reviewForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("reviewName").value;
  const rating = document.getElementById("reviewRating").value;
  const text = document.getElementById("reviewText").value;

  if (!name || !rating || !text) return;

  const review = { name, rating: parseInt(rating), text };
  const reviews = JSON.parse(localStorage.getItem("customerReviews")) || [];
  reviews.push(review);
  localStorage.setItem("customerReviews", JSON.stringify(reviews));

  // Reset form
  this.reset();
  loadReviews();
});




