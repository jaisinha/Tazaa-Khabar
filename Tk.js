// 75c0b0565912493ea1c2779fcdebef64
let source = "BBC-news";
let apiKey = "75c0b0565912493ea1c2779fcdebef64";
accordionExample = document.getElementById("accordionExample");

const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`,
  true
); //opens the url+data obtained from server
xhr.onload = function () {
  if (this.status == 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    console.log(json);
    let newsHTML = "";
    articles.forEach(function (element, index) {
      // console.log(element, index)
      let news = `<div class="card">
                        <div class="card-header" id="heading${index}">
                            <h2 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                aria-expanded="false" aria-controls="collapse${index}">
                               <b>Breaking News ${index + 1}:</b> ${
        element["title"]
      }
                            </button>
                            </h2>
                        </div>

                        <div id="collapse${index}" class="collapse show" aria-labelledby="heading${index}" data-parent="#accordionExample">
                            <div class="card-body"> ${
                              element["content"]
                            }. <a href="${
        element["url"]
      }" target="_blank" >Read more here</a>  </div>
                        </div>
                    </div>`;
      newsHTML += news;
    });
    accordionExample.innerHTML = newsHTML; // The contents of the file
  } else {
    console.log("Not Found");
  }
};
xhr.send();
