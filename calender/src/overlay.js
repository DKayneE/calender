
function openOverlay() {
        document.getElementById("overlay").style.display = "block";
    }
    function closeOverlay() {
        document.getElementById("overlay").style.display = "none";
    }

    document.querySelector(".close").addEventListener("click", closeOverlay);

    document.querySelectorAll("td[data-date]").forEach(td => {
        td.addEventListener("click", function() {
            openOverlay();
        });
    });