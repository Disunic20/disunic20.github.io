let abouts = document.getElementById("abbt");

// Create an ajax get request
const xhrr = new XMLHttpRequest();
xhrr.open("GET", `https://disunic20.github.io/Api.Disunic.io/json/main.json`, true);

// What to do when response is ready
xhrr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let api = json.api;
    // console.log(api)
    let ab = "";
    api.forEach(function (element) {
      let abot = ` 
            <p><a href="${element["url"]}">Disunic Corporation</a> - ${element["year"]} All Rights Reserved</p>`;
      ab += abot;
    });
    abouts.innerHTML = ab;
  } else {
    console.log("_🤔");
  }
};
xhrr.send();
