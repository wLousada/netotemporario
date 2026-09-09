document.addEventListener("DOMContentLoaded", () => {

    // FAQ

    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(question => {

        question.addEventListener("click", () => {

            const answer = question.nextElementSibling;

            const isOpen =
                answer.style.display === "block";

            document
                .querySelectorAll(".faq-answer")
                .forEach(item => {
                    item.style.display = "none";
                });

            if (!isOpen) {
                answer.style.display = "block";
            }

        });

    });

    // Scroll suave

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (target) {

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });

    // Animação ao aparecer

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    });

    document
        .querySelectorAll(".card, .plan-card, .number-card")
        .forEach(el => observer.observe(el));

});