$(".social").on("click", function (_a) {
    var target = _a.target;
    var url = $(target).attr("data-url") || $(target).parent().attr("data-url");
    open(url);
});
