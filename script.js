document.addEventListener("DOMContentLoaded", () => {
    const accordionButtons = document.querySelectorAll(".accordion-button");

    accordionButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const answer = button.previousElementSibling.querySelector(".more-info");
            const isOpen = answer.style.display === "block";

            document.querySelectorAll(".more-info").forEach((ans) => {
                ans.style.display = "none";
            });

            accordionButtons.forEach((btn) => {
                btn.classList.remove("open");
            });

            if (!isOpen) {
                answer.style.display = "block";
                button.classList.add("open");
            }
        });
    });
});
