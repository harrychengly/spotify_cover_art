var genres = {
    hiphop: "blue",
    rock: "red",
    pop: "green",
}

// every artist - one genre 

function imageAlgo(genreDict) {

    
    for (var genre in genreDict){
        //if genre in genres splash color on canvas 
        //else ignore
    }

    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    // Create gradient
    var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
    grd.addColorStop(0, "red");
    grd.addColorStop(1, "white");

    // Fill with gradient
    ctx.fillStyle = grd;
    ctx.fillRect(10, 10, 150, 80);
}