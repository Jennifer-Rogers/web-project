document.addEventListener("DOMContentLoaded", () => {
    const voteButtons = document.querySelectorAll(".voteBtn");

    voteButtons.forEach(button => {
        button.addEventListener("click", () => {
            const feedbackBox = button.parentElement.querySelector(".feedback");
            feedbackBox.style.display = "block";
        });
    });

    const submitButtons = document.querySelectorAll(".submitReason");

    submitButtons.forEach(submit => {
        submit.addEventListener("click", () => {
            alert("Thank you for voting and sharing why you liked this picture!");

            const feedbackBox = submit.parentElement;
            const photoBox = feedbackBox.parentElement;
            const voteCountSpan = photoBox.querySelector(".voteCount span");

            voteCountSpan.textContent = parseInt(voteCountSpan.textContent) + 1;

            feedbackBox.style.display = "none";
            feedbackBox.querySelector(".reasonInput").value = "";
        });
    });
});