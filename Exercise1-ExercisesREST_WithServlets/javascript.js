$(document).ready(function () {
    updateQuote();
});

$('#newQuote').on('click', function () {
    $('#qouteOfTheDay').empty();
    updateQuote();
});

$('#createQuotebutton').on('click', function () {
    createQuote($('#createQuoteInput').val());
    $('#createQuoteInput').val('');
});

$('#editQuoteButton').on('click', function () {
    var input = $('#editQuoteInput').val();
    var id = $('#editQuoteID').val();
    editQuote(input, id);
    $('#editQuoteInput').val('');
    $('#editQuoteID').val('');
});

$('#deleteQuoteButton').on('click', function () {
    var id = $('#deleteQouteID').val();
    deleteQuote(id);
    $('#deleteQouteID').val('');
});

function updateQuote() {
    //Here the url should be the url of the api we want to connect to, it could be a servlet.
    //As a proof of concept that my code works, i have used another api, that returns a country based on a countrycode.
    //The parameter in the url "gb" should return the country United Kingdom, and set it as the qoute of the day.
    var url = "/api/qoute/random";
    $.getJSON(url, function (res) {
        res.forEach(function (qoute) {
            try {
                $("#qouteOfTheDay").append('<p>' + qoute + "</p>");
            } catch (err) {
                console.log(err);
                $('#qouteOfTheDay').append("<p>Could not get the qoute of the day!</p>");
            }
        });
    });
}

function createQuote(input) {
    //Example url, this should be the url of a real api.
    var url = "/api/" + input;
    $.getJSON(url);
    console.log(url);
}

function editQuote(input, id) {
    //Example url, this should be the url of a real api.
    var url = "/api/" + input + "/" + id;
    $.getJSON(url);
    console.log(url);
}

function deleteQuote(id) {
    //Example url, this should be the url of a real api.
    var url = "/api/qoute/" + id;
    $.getJSON(url);
    console.log(url);
}