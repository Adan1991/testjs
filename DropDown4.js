document.addEventListener("DOMContentLoaded", function() {
    var toggleButton = document.getElementById("toggleText");
    var dropdown = document.getElementById("dropdownContent");
    var iframe = dropdown.querySelector("iframe");  // Select iframe inside dropdown

    var videoURL = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0"; // Autoplay enabled

    // Make sure the dropdown starts in the correct state (hidden)
    dropdown.style.display = "none";

    if (toggleButton && dropdown && iframe) {
        toggleButton.addEventListener("click", function() {
            // Toggle visibility
            if (dropdown.style.display === "none") {
                dropdown.style.display = "block";  // Show the dropdown
                iframe.src = videoURL;  // Set the video source to autoplay
            } else {
                dropdown.style.display = "none";  // Hide the dropdown
                iframe.src = "";  // Remove the video source to stop it
            }
        });
    }
});
