$(".nav-tabs span").on("click", function (_a) {
    var target = _a.target;
    location.href = $(target).attr("data-url") || "/";
});
function updateNavbarOpacity() {
    if (scrollY > 0) {
        $(".nav-bar").get(0).classList.add("scrolled");
    }
    else {
        $(".nav-bar").get(0).classList.remove("scrolled");
    }
}
$(window).on("scroll", function () {
    updateNavbarOpacity();
});
updateNavbarOpacity();
