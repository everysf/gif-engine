var queryURL;
var query;
var buttonArray = [
    "Adam Sandler", "Will Ferrel", "Jerry Seinfeld", "Ben Stiller", "Vince Vaughn"
]

function renderButtons() {
    console.log("hi")

    $(".gifButtonBox").empty()
    for (var i = 0; i < buttonArray.length; i++) {

        var button = $("<button class='gifButton'>" + buttonArray[i] + "</button>")
        $(".gifButtonBox").append(button)
        $(button).attr("data-search", buttonArray[i])
    }
}

$(document).on("click", ".gifButton", function() {

    query = $(this).attr("data-search")
    console.log(query)
    queryURL = "https://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=dc6zaTOxFJmzC&limit=9";
    $(".gifContainer").empty()
    event.preventDefault();

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function(response) {
        console.log(response)
        for (var i = 0; i < response.data.length; i++) {
            var rating = response.data[i].rating
            rating = rating.toUpperCase()
            var imageURL = response.data[i].images.fixed_height_small_still.url
            var imageStill = response.data[i].images.fixed_height_small_still.url
            var imageAnimate = response.data[i].images.fixed_height_small.url
            var imageMoving = false;
            var newGifBox = $("<div>")
            $(newGifBox).addClass("gifBox")
            $(newGifBox).css("background-image", "url(" + imageURL + ")")
            $(newGifBox).attr("data-imageAnimate", imageAnimate)
            $(newGifBox).attr("data-imageMoving", imageMoving)
            $(newGifBox).attr("data-imageStill", imageStill)

            $(newGifBox).html("<p>" + rating + "</p>")

            $(".gifContainer").append(newGifBox)
        }
    });
        
});

$(document).on("click", "#submit", function() {
    event.preventDefault();
    var newButton;
    newButton = $("#searchGif").val().trim()
    buttonArray.push(newButton)
    renderButtons()
})

$(document).on("click", ".gifBox", function() {
    var imageStill = $(this).attr("data-imageStill")
    var imageAnimate = $(this).attr("data-imageAnimate")
    if ($(this).attr("data-imageMoving") == "false"){

        $(this).attr("data-imageMoving", "true")
        $(this).css("background-image", "url(" + imageAnimate + ")")
    } else {
        $(this).attr("data-imageMoving", "false")
        $(this).css("background-image", "url(" + imageStill + ")")
    }
})

renderButtons()