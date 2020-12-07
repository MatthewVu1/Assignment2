document.getElementById("dark_theme").addEventListener("click", theme);
document.getElementById("save").addEventListener("click", save);
document.getElementById("cancel").addEventListener("click", hide);
document.getElementById("new_note").addEventListener("click", new_note);

function theme() {
    var sidebar = document.getElementById("change1");
    var container = document.getElementById("change2");
    var darkbutton = document.getElementById("dark_theme");
    var whitetext = document.getElementById("change4");
    if (document.getElementById("dark_theme").innerHTML === "Dark Theme"){
        document.getElementById("dark_theme").innerHTML = "Light Theme";
    } else {
        document.getElementById("dark_theme").innerHTML = "Dark Theme";
    }
    sidebar.classList.toggle("theme1");
    container.classList.toggle("theme2");
    darkbutton.classList.toggle("theme3");
    whitetext.classList.toggle("changetext");
}

function createNoteArray(){
    note1 = {
        title: "note one",
        body: "some text 1",
    };
    note2 = {
        title: "note two",
        body: "some text 2",
    };
    const noteList = [note1, note2];
    return notelist
    }

function save() {
    var text = document.getElementById("textarea").value;
    //new_note = {
    //    note: text
    //}
    //note_list.push(new_note)
    var element = document.getElementById("append");
    var new_note = document.createElement("li");
    var note_desc = document.createTextNode(text);
    new_note.appendChild(note_desc);
    element.appendChild(new_note);
}

function hide() {
    document.getElementById("cancel").style.display = "none";
    document.getElementById("save").style.display = "none";
    document.getElementById("textarea").style.display = "none";
}

function new_note(){
    if (document.getElementById("textarea").style.display === "block") {
        document.getElementById("textarea").value = "";
    }
    else{
        document.getElementById("cancel").style.display = "inline-flex";
        document.getElementById("save").style.display = "inline-flex";
        document.getElementById("textarea").style.display = "block";
    }
}
