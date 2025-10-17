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

// ----------------- Book Appointment WhatsApp -----------------
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("appointmentForm");
    const note = document.getElementById("whatsappNote");
    const OWNER_NUMBER = "919793677725"; // <-- Owner ka WhatsApp number

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
 // ----------------- Customer Review Section -----------------
    const reviewForm = document.getElementById("reviewForm");
    const reviewsList = document.getElementById("reviewsList");

    if (reviewForm && reviewsList) {
        // Load existing reviews
        loadReviews();

        // Handle form submit
        reviewForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("reviewName").value.trim();
            const rating = document.getElementById("reviewRating").value.trim();
            const text = document.getElementById("reviewText").value.trim();

            if (!name || !rating || !text) return;

            const review = { name, rating: parseInt(rating), text };
            const reviews = JSON.parse(localStorage.getItem("customerReviews")) || [];
            reviews.push(review);
            localStorage.setItem("customerReviews", JSON.stringify(reviews));

            // Reset form and reload
            reviewForm.reset();
            loadReviews();
        });

        // Load and display reviews function
        function loadReviews() {
            const reviews = JSON.parse(localStorage.getItem("customerReviews")) || [];
            reviewsList.innerHTML = "";

            if (reviews.length === 0) {
                reviewsList.innerHTML = "<p class='text-center text-muted'>No reviews yet. Be the first to write one!</p>";
                return;
            }

            reviews.forEach(r => {
                const col = document.createElement("div");
                col.classList.add("col-md-6", "col-lg-4");

                col.innerHTML = `
                    <div class="review-item border p-3 rounded bg-white shadow-sm">
                        <h5 class="text-primary mb-1">${r.name}</h5>
                        <p class="mb-1">⭐ ${r.rating}/5</p>
                        <p class="text-muted mb-0">${r.text}</p>
                    </div>
                `;
                reviewsList.appendChild(col);
            });
        }
    }
});



