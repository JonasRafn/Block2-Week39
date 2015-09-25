$(window).load(function () {

    var map = document.getElementById('map');
    var svgDoc = map.contentDocument;
    var element = svgDoc.documentElement;

    var lastSelected;

    $("path", element).on('click', function () {
        var id = $(this).attr("id");
        var url = "/ExamPrepJPARESTAJAXJS/country?country=" + id;

        $(this).css("fill", "#000");

        if (lastSelected === undefined) {
            lastSelected = $(this);
        } else {
            lastSelected.css("fill", "#c0c0c0");
            lastSelected = $(this);
        }

        $.getJSON(url, function (res) {
            res.forEach(function (country) {
                try {
                    $("#mapData").html("<ul>" +
                            "<li>" + "Country: " + country.name + "</li>" +
                            "<li>" + "Capital: " + country.capital + "</li>" +
                            "<li>" + "Subregion: " + country.subregion + "</li>" +
                            "<li>" + "Popultaion: " + country.population + "</li>" +
                            "<li>" + "Currency: " + country.currencies + "</li>" +
                            "</ul>");
                } catch (err) {
                    console.log(err);
                    $('#mapData').html("<ul>" +
                            "<li>" + "Country: NA" + "</li>" +
                            "<li>" + "Capital: NA" + "</li>" +
                            "<li>" + "Subregion: NA" + "</li>" +
                            "<li>" + "Popultaion: NA" + "</li>" +
                            "<li>" + "Currency: NA" + "</li>" +
                            "</ul>");
                }

            });
        });
    });
});

