$(document).ready(function() { 

	var movie;       
        $.ajax({
        	//type: 'GET',
        	//crossDomain: true,
            url : "http://www.omdbapi.com/?t=como+agua+para+chocolate&y=&plot=short&r=json",
        }).done(function(Data){
            console.log(Data);
            movie = Data;
            console.log(movie);
            var $newMovie = $("<p>" + movie.Title + " is a great movie and book. The movie was released in " +
            	movie.Year + ". It was directed by " + movie.Director + ". " + movie.Plot + "etc., etc., etc." +
            "</p>");
            console.log($newMovie);
            $(".toappend").append($newMovie);
            var $headerTitle = $("<h1 style='text-transform: uppercase'>" + movie.Title + "</h1>");
            console.log($headerTitle);
            $("header").append($headerTitle);
            });
        });

 




        




// var apikey = 'dc6zaTOxFJmzC'; // Put your API key here

// function searchCallback(results) {
//     console.log(results);
// }

// $(document).ready(function() {
// 	search('ryan+gosling');

// });



// function search(query){

// 	$.ajax ({
// 	    type: 'GET',
// 	    dataType: 'jsonp',
// 	    crossDomain: true,
// 	    jsonp: 'json_callback',
// 	    url: 'http://api.giphy.com/v1/gifs/search?q=' + encodeURI(query) + '&api_key=' + apikey,
// 	}).done(function(data){
// 		searchCallback(data.results);
// 	});
// }




// var $target = $("<p>" + )

// });