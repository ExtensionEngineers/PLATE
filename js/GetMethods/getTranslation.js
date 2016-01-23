

chrome.storage.onChanged.addListener(function() {
    var language;
    var paragraphIndex;
    var $p = $("p:eq(0)");
    var pString = $p.text();
    chrome.storage.sync.get(null, function(data) {
        language = data.language;

        pString = pString.split(" ");
        paragraphIndex = Math.floor((Math.random() * pString.length) + 1);
        var word = pString[paragraphIndex];

        var $language = $("#language");
        var $sourceText = $("#sourceText");
        var url = 'https://www.googleapis.com/language/translate/v2?key=AIzaSyCL9jeVEeDwzPxHXkDv39woblcUc538pDM&source=en' +
            '&target=' + language +
            '&q=' + word;

        //GET method
        $.get(url,function(response) {
            var translatedWord = response.data.translations[0].translatedText;
            var pString = $p.text();
            pString = pString.split(" ");
            pString[paragraphIndex] = "<strong>" + translatedWord + "</strong>";
            pString = pString.join(" ");

            $p.html(pString);
        });
    });
});