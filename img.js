const image = document.getElementById("fullscreen-profile-picture");

image.addEventListener("click", function() {
  if (image.style.display === "none") {
    image.style.display = "block";
  } else {
    image.style.display = "none";
  }
});
