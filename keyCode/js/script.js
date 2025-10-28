let $ = document;

let locationKey = $.querySelector("#location");
let title = $.querySelector("title");

let keyCodeElem = $.getElementById("keyCode");
let keyElem = $.getElementById("key");
let locationElem = $.getElementById("location");
let whichElem = $.getElementById("which");
let codeElem = $.getElementById("code");

document.body.addEventListener("keydown", function (e) {
  e.preventDefault();

  starter.style.display = "none";
  heading.style.display = "flex";
  ascii.style.display = "flex";
  infos.style.display = "flex";

  const eventKeyCode = e.keyCode;
  const eventKey = e.key;
  const eventLocation = e.location;
  const eventWhich = e.which;
  const eventCode = e.code;

  keyCodeElem.innerHTML = eventKeyCode;
  keyElem.innerHTML = eventKey;
  locationElem.innerHTML = eventLocation;
  whichElem.innerHTML = eventWhich;
  codeElem.innerHTML = eventCode;
});
