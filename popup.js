var captured = function(imgUrl) {
    var img = new Image;
    img.src = imgUrl;
    img.id = "screenshot";
    var node = document.getElementById("ImgArea");
    node.innerHTML = "";
    node.appendChild(img);
};

document.addEventListener('DOMContentLoaded', function() {
    chrome.tabs.captureVisibleTab(null, {
        "format": "jpeg"
    }, captured);
    var isSave = document.getElementById('save');
    isSave.addEventListener('click', function() {
        download();
    });
});

var download = function() {
    var imgElem = document.getElementById('screenshot');
    var imgSrc = imgElem.src;
    window.win = open(imgSrc);
};
