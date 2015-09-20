$(document).ready(function() { 

	var movie;       
        $.ajax({
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

 




        



