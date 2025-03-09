document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("bookTrial").addEventListener("click", function() {
        alert("🎉 Your Free Trial is Successfully Booked!");
    });

    const enrollButtons = document.querySelectorAll(".btn-secondary");
    enrollButtons.forEach(button => {
        button.addEventListener("click", function() {
            alert("✅ Enrollment Successful!");
        });
    });
});
