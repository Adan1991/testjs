document.addEventListener("DOMContentLoaded", function() {
    var toggleButton = document.getElementById("toggleText");
    var dropdown = document.getElementById("dropdownContent");

    if (toggleButton && dropdown) {
        toggleButton.addEventListener("click", function() {
            dropdown.classList.toggle("active");
        });
    }
});
