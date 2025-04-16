document.addEventListener("DOMContentLoaded", function () {
    var toggleButtons = document.querySelectorAll(".toggle-button");

    toggleButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            var targetId = this.getAttribute("data-target");
            var dropdown = document.getElementById(targetId);

            if (dropdown) {
                dropdown.classList.toggle("active");
            }
        });
    });
});
