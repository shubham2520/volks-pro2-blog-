var img = document.getElementById("gfg-img");
var preview = document.querySelector(".zoom-preview");

//calculating the ratio by which we want to magnify the image
//you can increase or decrease it according to your requirement
var x = preview.offsetWidth / 100;
var y = preview.offsetHeight / 100;

img.addEventListener("mousemove", (e) => {
    preview.style.backgroundImage = 
"url(wp8277808-kohinoor-wallpapers.jpg)";
    preview.style.backgroundSize = img.width * x + 
      "px " + img.height * y + "px";
    var posX = e.offsetX;
    var posY = e.offsetY;
    preview.style.backgroundPosition = "-" + posX * x + 
      "px -" + posY * y + "px";
});
img.addEventListener("mouseout", () => {
    preview.style.backgroundImage = "none";
});