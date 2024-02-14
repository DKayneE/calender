const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("Sadge Liferu with no Wiferu :(");
    } else {
        let li = document.createElement("li");
        li.textContent = inputBox.value;

        let img = document.createElement("img");
        img.src = "styles/img/x1.png"; // Pfadeinstellung zum Bild
        img.classList.add("delete-icon"); // Optional: Klasse für das Bild hinzufügen

        // Hier wird das Bild direkt zum Listenelement hinzugefügt
        li.appendChild(img);

        listContainer.appendChild(li);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "IMG") {
        e.target.parentElement.remove(); // Elternelement des Bildes entfernen, also das <li> Element
        saveData();
    }
}, false);
