function toggleChange(x) {
    var nav = document.getElementById("sidebarnav");
    var amountOfPx = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (nav.style.width == amountOfPx+"px") {
        nav.style.width = "0"
    } else {
        nav.style.width = amountOfPx+"px";
    }
}

function closeNav() {
    document.getElementById("sidebarnav").style.width = "0";
}

function go(url) {
    window.location.href = url;
}