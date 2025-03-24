document.addEventListener("DOMContentLoaded", function() {
    var clickable = document.getElementById("toggleText");
    var dropdown = document.getElementById("dropdownContent");

    if (clickable && dropdown) {
        clickable.addEventListener("click", function() {
            dropdown.classList.toggle("active");
        });
    }
});
