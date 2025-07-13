// var movies=["MISSION IMPOSSIBLE","FINAL DESTINATION"];

// function LoadMovies(){
//     document.getElementById("lstMovies").innerHTML="";
//     movies.map(function(movie){
//         var option=document.createElement("option");
//         option.text=movie;
//         option.value=movie;
//         document.getElementById("lstMovies").appendChild(option);
//     })
//     document.getElementById("lblCount").innerHTML = `Total count of Movies:${movies.length}`;
// }
// function Addclick(){
//     var movieName=document.getElementById ("txtMovie").value;
//     if(movies.indexOf(movieName.toUpperCase())===-1){
//         movies.push(movieName.toUpperCase());
//         alert(`${movieName} Added to list`);
//         LoadMovies();
//         document.getElementById("txtMovie").value="";   
//     } else{
//         alert(`${movieName} Exists`);
//     }
// }

// function SortAsc(){
//     movies.sort();
//     LoadMovies();

// }
// function SortDsc(){
//     movies.sort();
//     movies.reverse();
//     LoadMovies();
// }
// function DeleteClick(){
//     var selectedMovieName=document.getElementById("lstMovies").value;
//     var selectedMovieIndex=movies.indexOf(selectMoviewName);
//     var choice=confirm(`Delete ${selectedMovieName}\n Are you sure want to delete?`);
//     if (choice===true){
//         movies.splice(selectedMovieIndex,1);
//         LoadMovies();

//     }
// }
// function clearAll(){
//     movies.length=0;
//     LoadMovies();
// }
// function EditClick(){
//     var movieName=document.getElementById("lstMovies").value;
//     document.getElementById("txtEditMovie").value=movieName;
// }
// function SaveClick(){
//     var newMovieName=document.getElementById("txtEditMovie").value;
//     var selectedMovieName=document.getElementById("lstMovies").value;
//     var selectedMovieIndex=movies.indexOf(selectedMovieName);

//     movies[selectedMovieIndex]=newMovieName;
//     LoadMovies();

// }   


var movies = ["MISSION IMPOSSIBLE", "FINAL DESTINATION"];

function LoadMovies() {
    const list = document.getElementById("lstMovies");
    list.innerHTML = "";

    movies.forEach(function (movie) {
        var option = document.createElement("option");
        option.text = movie;
        option.value = movie;
        list.appendChild(option);
    });

    document.getElementById("lblCount").innerHTML = `Total count of Movies: ${movies.length}`;
}

function AddClick() {
    var movieName = document.getElementById("txtMovie").value.toUpperCase();
    if (movieName.trim() === "") {
        alert("Movie name cannot be empty");
        return;
    }
    if (movies.indexOf(movieName) === -1) {
        movies.push(movieName);
        alert(`${movieName} added to list`);
        LoadMovies();
        document.getElementById("txtMovie").value = "";
    } else {
        alert(`${movieName} already exists`);
    }
}

function SortAsc() {
    movies.sort();
    LoadMovies();
}

function SortDsc() {
    movies.sort().reverse();
    LoadMovies();
}

function DeleteClick() {
    var selectedMovieName = document.getElementById("lstMovies").value;
    var selectedMovieIndex = movies.indexOf(selectedMovieName);
    if (selectedMovieIndex !== -1) {
        var choice = confirm(`Delete "${selectedMovieName}"?\nAre you sure you want to delete?`);
        if (choice) {
            movies.splice(selectedMovieIndex, 1);
            LoadMovies();
        }
    } else {
        alert("Please select a movie to delete.");
    }
}

function ClearAll() {
    movies.length = 0;
    LoadMovies();
}

function EditClick() {
    var movieName = document.getElementById("lstMovies").value;
    if (!movieName) {
        alert("Please select a movie to edit.");
        return;
    }
    document.getElementById("txtEditMovie").value = movieName;
}

function SaveClick() {
    var newMovieName = document.getElementById("txtEditMovie").value.toUpperCase();
    var selectedMovieName = document.getElementById("lstMovies").value;
    var selectedMovieIndex = movies.indexOf(selectedMovieName);

    if (selectedMovieIndex !== -1) {
        movies[selectedMovieIndex] = newMovieName;
        LoadMovies();
    }
}
