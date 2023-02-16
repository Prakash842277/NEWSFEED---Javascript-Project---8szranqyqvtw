const businessNews = document.getElementById("business");
const allNews = document.getElementById("all");
const sportsNews = document.getElementById("sports");
const worldNews = document.getElementById("world");
const politicsNews = document.getElementById("politics");
const hatkeNews = document.getElementById("hatke");
const scienceNews = document.getElementById("science");
const automobileNews = document.getElementById("automobile");
const container = document.querySelector(".container");


businessNews.addEventListener("click", function(){
     fetchNEWS("business");
});

allNews.addEventListener("click", function(){
    fetchNEWS("all");
});

sportsNews.addEventListener("click", function(){
    fetchNEWS("sports");
});

worldNews.addEventListener("click", function(){
    fetchNEWS("world");
});

politicsNews.addEventListener("click", function(){
    fetchNEWS("politics");
});

hatkeNews.addEventListener("click", function(){
    fetchNEWS("hatke");
});

scienceNews.addEventListener("click", function(){
    fetchNEWS("science");
});

automobileNews.addEventListener("click", function(){
    fetchNEWS("automobile");
});

function fetchNEWS(category) {
  const previousNews = document.querySelectorAll(".newsItem");
  previousNews.forEach((newsItem) => {
    newsItem.remove();
  });
  fetch(`https://inshorts.deta.dev/news?category=${category}`)
  .then((response) => response.json())
  .then((data)=>{
    console.log("Data",data)
    data.data.forEach((newsItem) => {
      const div = document.createElement("div");
      div.classList.add("newsItem");
      div.innerHTML = `
        <p>By <strong>${newsItem.author}</strong></p>
        <h2>${newsItem.title}</h2>
        <div id="box">
        <img src="${newsItem.imageUrl}" class="img"></img>
        <div id="innerbox">
        <p id="nscontent">${newsItem.content} <a href="${newsItem.readMoreUrl}" style="text-decoration:none">READ MORE</a></p>
        <p>Date:- ${newsItem.date}</p>
        <p>Time:- ${newsItem.time}</p>
        </div>
        </div>
        `;
      const button = document.createElement("button");
      button.innerHTML = "Save";
      button.onclick = function  (){
        saveNewsItem(newsItem);
        const message = document.createElement("p");
        message.innerHTML = "The news has been saved.";
        div.appendChild(message);
      }
      div.appendChild(button);
      container.appendChild(div);
    });
  });
};

function saveNewsItem(newsItem) {
  localStorage.setItem('savedNews', JSON.stringify(newsItem));
}
