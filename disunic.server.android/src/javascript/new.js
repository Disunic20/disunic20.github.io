let newsAccordionn = document.getElementById("projects");

// Create an ajax get request
const xhrnew = new XMLHttpRequest();
xhrnew.open("GET", `https://disunic20.github.io/disunic.server.android/src/javascript/JSON/new.json`, true);

// What to do when response is ready
xhrnew.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let api = json.api;
    console.log(api)
    let newareess = "";
    api.forEach(function (element) {
      let news = `
            <div class="card">
                <h2 class="Hn">${element["title"]}</h2>
                <p class="ab">${element["description"]}</p>
                <p class="lang">${element["language"]}</p>
                <div class="btns">
                    <a href="${element["url1"]}">Deployment</a>
                    <a href="${element["url2"]}">GitHub</a>
                    <a href="${element["url3"]}">Codepen</a>
                    <a href="${element["url4"]}">Download_Source_Code</a>
                </div>
            </div>`
      newareess += news;
    });
    newsAccordionn.innerHTML = newareess;
  } else {
    console.log("_🤔");
  }
};
xhrnew.send();