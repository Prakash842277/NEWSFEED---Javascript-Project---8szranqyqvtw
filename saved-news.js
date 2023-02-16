// Retrieve saved news from localStorage
const savedNews = JSON.parse(localStorage.getItem('savedNews')) || [];

// Get the news-list div from the HTML
const newsList = document.getElementById('news-list');

// Loop through saved news and create HTML for each item
savedNews.forEach((newsItem) => {
  const div = document.createElement('div');
  div.classList.add('newsItem');
  div.innerHTML = `
    <p>By <strong>${newsItem.author}</strong></p>
    <h2>${newsItem.title}</h2>
    <div id="box">
      <div id="innerbox">
        <p id="nscontent">${newsItem.content} <a href="${newsItem.readMoreUrl}" style="text-decoration:none">READ MORE</a></p>
        <p>Date:- ${newsItem.date}</p>
        <p>Time:- ${newsItem.time}</p>
      </div>
    </div>
  `;
  newsList.appendChild(div);
});
