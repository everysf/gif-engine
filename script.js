var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=";

$(document).on("click", "#submit", function() {

    var query = $("#searchGif").val().trim()
    var button = $("<button>").attr("data-search", query)
    $(button).text(query)
    $(".gifButtonBox").append(button)
    console.log(button)

})

// $(document).on("click", ".gifButton", function() {

//     query = $(".gifButton").attr("data-search")

//     console.log(query)

//     queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + query;

//     for (var j = 1; j < 10; j++) {

//         event.preventDefault();
//         $.ajax({
//         url: queryURL,
//         method: "GET"
//         }).then(function(response) {

//         console.log(response)

//         var imageURL = response.data.image_original_url

//         $("#divBox-" + [j]).css("background-image", "url(" + imageURL + ")")
        
//     })

//     }   
// });

$(document).on("click", ".gifButton", function() {

    query = $(".gifButton").attr("data-search")

    queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + query;

    for (var j = 1; j < 4; j++) {

        $("gifRow-" + [j]).empty()

        console.log("gifRow-" + [j])

        event.preventDefault();
        $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response) {

        console.log(response)

        var imageURL = response.data.image_original_url

        for (var i = 1; i < 4; i++) {

            var newGifBox = $("<div>")
            $(newGifBox).addClass("gifBox")
            $(newGifBox).css("background-image", "url(" + imageURL + ")")
            $("#gifRow-" + [i]).append(newGifBox)
        
            }
        
        });

    }

});