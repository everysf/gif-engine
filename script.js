var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=";

$(document).on("click", "#submit", function() {

    var query = $("#searchGif").val().trim()
    var button = $("<button>").attr("data-search", query)
    $(button).text(query)
    $(".gifButtonBox").append(button)
    console.log(button)

})

$(document).on("click", ".gifButton", function() {

    

    query = $(".gifButton").attr("query")

    queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + query;

    for (var j = 1; j < 4; j++) {

        var currentRow = "#gifRow-" + [j]

        $(currentRow).empty()

        console.log(currentRow)

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
            $(currentRow).append(newGifBox)
        
            }
        
        });

    }

});