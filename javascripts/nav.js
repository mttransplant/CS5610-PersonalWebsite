$(function() {
    $(".nav_bar").load("/html_serve/nav.html");
    $("footer").load("/html_serve/footer.html");
});

function goToURL(url) {
    location.href = url;
}