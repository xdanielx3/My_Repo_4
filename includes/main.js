var nameErrorJs = document.getElementById("nameError");

document.getElementById("button").onclick = function() {
    var nameRightJs = document.getElementById("nameRight").value;
    if (((nameRightJs.indexOf("a"))!= -1) && (nameRightJs.indexOf("d") != -1) && ((nameRightJs.indexOf(" ") == -1)))
        return true;
    else {
        nameErrorJs.innerHTML = "<h3>" + "invalid input" + "</h3>";
        return false;
    }
};