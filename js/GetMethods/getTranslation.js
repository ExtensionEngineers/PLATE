var language = "es";
var index = 0;

//Callback function
function translateText(response) {
    var $p = $("p:eq(0)");
    var translatedWord = response.data.translations[0].translatedText;

    var pString = $p.text();
    pString = pString.split(" ");

    pString[index] = "<strong>" + translatedWord + "</strong>";

    pString = pString.join(" ");
    $p.html(pString);
}


function translate(word, n) {
    index = n;
    var $language = $("#language");
    var $sourceText = $("#sourceText");
    var url = 'https://www.googleapis.com/language/translate/v2?key=AIzaSyCL9jeVEeDwzPxHXkDv39woblcUc538pDM&source=en' +
        '&target=' + language +
        '&q=' + word;

    //GET method
    $.get(url, translateText);
};



//ignore for now
$("#language").change(function() {
    language = $("#language");
});