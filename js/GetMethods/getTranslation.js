var language = "es";

//Callback function
function translateText(response) {
    var translatedPhrase = response.data.translations[0].translatedText;
    return translatedPhrase;
}


function translate(word) {
    var $language = $("#language");
    var $sourceText = $("#sourceText");
    var url = 'https://www.googleapis.com/language/translate/v2?key=AIzaSyCL9jeVEeDwzPxHXkDv39woblcUc538pDM&source=en' +
        '&target=' + language +
        '&q=' + word;

    //GET method
    var translatedPhrase = $.get(url, translateText);
    return translatedPhrase;
};


//ignore for now
$("#language").change(function() {
    language = $("#language");
});