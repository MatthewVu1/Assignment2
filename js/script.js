document.getElementById("dark_theme").addEventListener("click", theme);

function theme() {
    var sidebar = document.getElementById("change1");
    var container = document.getElementById("change2");
    var darkbutton = document.getElementById("dark_theme");
    var whitetext = document.getElementById("change4");
    sidebar.classList.toggle("theme1");
    container.classList.toggle("theme2");
    darkbutton.classList.toggle("theme3");
    whitetext.classList.toggle("changetext");
    alert('hi');
}

