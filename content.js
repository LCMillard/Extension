// content.js

const newFaviconUrl = "https://d2td6mzj4f4e1e.cloudfront.net/wp-content/uploads/sites/7/2017/03/SDC_Banner_Logo_StandAlone.jpg";

function changeFavicon() {
  const link = document.createElement("link");
  link.rel = "icon";
  link.type = "image/x-icon";
  link.href = newFaviconUrl;

  const oldFavicon = document.querySelector("link[rel='icon']");
  if (oldFavicon) {
    oldFavicon.parentNode.removeChild(oldFavicon);
  }

  document.head.appendChild(link);
}

changeFavicon();
