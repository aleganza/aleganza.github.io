fetch("/api/video", {
    "method": "GET"
}).then(function (res) {
    return res.text();
}).then(function (videoURL) {
    $(".video-section iframe").attr("src", videoURL);
});
