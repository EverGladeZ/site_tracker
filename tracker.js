let dataCollectionUrl = "https://tothemoon.groupbycloud.com/data-collection";

window.addEventListener("load", (event) => {
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = false;
  xhr.open("POST", dataCollectionUrl, true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  xhr.onreadystatechange = function () {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
    }
  };
  let textContent = {};
  textContent.favicon = "/assets/images/favicon-32x32.png";
  let url = window.location.href;
  url = url.replace(/^https?:\/\//, '');
  let addToJson = {
    server_time: new Date().toJSON(),
    customer_id: url.split(".")[0],
    id: generateUUIDTracker(),
    text_content: JSON.stringify(textContent),
    href: window.location.href
  };
  let args = {
    toJson: addToJson,
  };
  xhr.send(JSON.stringify(args));
});

const generateUUIDTracker = () => {
    let d = new Date().getTime(),
      d2 =
        (typeof performance !== "undefined" &&
          performance.now &&
          performance.now() * 1000) ||
        0;
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      let r = Math.random() * 16;
      if (d > 0) {
        r = (d + r) % 16 | 0;
        d = Math.floor(d / 16);
      } else {
        r = (d2 + r) % 16 | 0;
        d2 = Math.floor(d2 / 16);
      }
      return (c == "x" ? r : (r & 0x7) | 0x8).toString(16);
    });
  };
  
