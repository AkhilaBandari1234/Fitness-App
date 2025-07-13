
function BookClick() {
    document.getElementById("btnContainer").style.display = "none";
    document.getElementById("summaryContainer").style.display = "block";

    const movieName = document.getElementById("lstMovies").value;
    document.getElementById("lblMovie").textContent = movieName;

    if (movieName === "Mission Impossible") {
        document.getElementById("imgPoster").src ="../images/Mission-Impossible-Final-Reckoning.jpg";
    } else {
        document.getElementById("imgPoster").src = "../images/Final-Destination-Bloodlines.jpg";
    }

    document.getElementById("lblCinema").textContent = document.getElementById("lstCinema").value;
    document.getElementById("lblDate").textContent = document.getElementById("lstDate").value;
    document.getElementById("lblTiming").textContent = document.getElementById("lstTiming").value;
}

function EditClick() {
    document.getElementById("lblTitle").textContent = "Modify Booking";
    document.getElementById("btnBook").textContent = "Save";
    document.getElementById("btnBook").className = "btn btn-success";
}
