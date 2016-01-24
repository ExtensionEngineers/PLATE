function translate(){
    var paragraphIndex;
    var apiKey = "AIzaSyCL9jeVEeDwzPxHXkDv39woblcUc538pDM";
    var apiSource = "en";
    var $p = $("p:eq(0)");
    var pString = $p.text();
    chrome.storage.sync.get(null, function(data) {
        var language = data.language;

        pString = pString.split(" ");
        paragraphIndex = Math.floor((Math.random() * pString.length) + 1);
        var word = pString[paragraphIndex];

        var url = 'https://www.googleapis.com/language/translate/v2' +
            '?key=' + apiKey +
            '&source=' + apiSource +
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
}

translate();

chrome.storage.onChanged.addListener(translate);

