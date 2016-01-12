//Callback function
function translateText(response) {
    var translatedText = response.data.translations[0].translatedText;
    $("#translation").text(translatedText);
}

$("#language").change(function() {
    var $language = $("#language");
    var $sourceText = $("#sourceText");
    var url = 'https://www.googleapis.com/language/translate/v2?key=AIzaSyCL9jeVEeDwzPxHXkDv39woblcUc538pDM&source=en' +
        '&target=' + $language.val() +
        '&q=' + $sourceText.text();

    //GET method
    $.get(url, translateText);
});