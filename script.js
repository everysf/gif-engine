var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=";

var query;

$(document).on("click", ".gifButton", function render() {

    query = $(this).attr("data-search")
    $(".gifButton").attr("data-search", query)
    queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + query +"&rating=g";

    for (var j = 1; j < 10; j++) {

        $(".gifContainer").empty()
        event.preventDefault();
        $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response) {
            var imageURL = response.data.image_original_url
            var rating = '<p class="rating">Rated G</p>'
            var newGifBox = $("<div>")
            $(newGifBox).addClass("gifBox")
            $(newGifBox).css("background-image", "url(" + imageURL + ")")
            $(newGifBox).html(rating)
            $(".gifContainer").append(newGifBox)
        });
        
    }
});

$(document).on("click", "#submit", function() {
    query = $("#searchGif").val().trim()
    var button = $("<button>").attr("data-search", query)
    $(button).text(query)
    $(".gifButtonBox").append(button)    
    $("#searchGif").val("")
    render(query)
})