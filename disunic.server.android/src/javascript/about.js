let aboutts = document.getElementById("abouts");

// Create an ajax get request
const xhrrr = new XMLHttpRequest();
xhrrr.open("GET", `./JSON/about.json`, true);

// What to do when response is ready
xhrrr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let api = json.api;
    // console.log(api)
    let abv = "";
    api.forEach(function (element) {
      let abot = ` 
        <img id="abpimg" src="./source/favicon.png" alt="" />
        <p style="margin-top: 20px; margin-bottom: 15px; font-weight: 600" id="abp1">${element["abp1"]}</p>
        <p style="margin-top: 20px; margin-bottom: 15px; font-weight: 600" id="abp2">${element["abp2"]}</p>`;
      abv += abot;
    });
    aboutts.innerHTML = abv;
  } else {
    console.log("_🤔");
  }
};
xhrrr.send();
