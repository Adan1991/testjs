document.addEventListener("DOMContentLoaded", function() {
    var toggleButton = document.getElementById("toggleText");
    var dropdown = document.getElementById("dropdownContent");
    var iframe = document.getElementById("rickrollVideo");

    var videoURL = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0"; // Autoplay enabled

    if (toggleButton && dropdown && iframe) {
        toggleButton.addEventListener("click", function() {
            dropdown.classList.toggle("active");

            if (dropdown.classList.contains("active")) {
                iframe.src = videoURL; // Set the src only when the dropdown is shown
            } else {
                iframe.src = ""; // Remove the src to stop the video when closing
            }
        });
    }
});
