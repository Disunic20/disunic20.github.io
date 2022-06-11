let newsAccordionee = document.getElementById("abbt");

// Create an ajax get request
const xhrr = new XMLHttpRequest();
xhrr.open("GET", `https://disunic20.github.io/api.json`, true);

// What to do when response is ready
xhrr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let api = json.api;
    console.log(api)
    let newaress = "";
    api.forEach(function (element) {
      let newss = ` 
            <p><a href="${element["url"]}">Disunic Corporation</a> - ${element["year"]} All Rights Reserved</p>`;
      newaress += newss;
    });
    newsAccordionee.innerHTML = newaress;
  } else {
    console.log("_🤔");
  }
};
xhrr.send();
