const savedNewsButton = document.getElementById("saved-news-button");
const newNewsButton = document.getElementById("new-news-button");

savedNewsButton.addEventListener("click", function() {
window.location.href = "saved-news.html";
});

newNewsButton.addEventListener("click", function() {
window.location.href = "new-news.html";
});
