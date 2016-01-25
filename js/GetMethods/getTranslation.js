chrome.storage.onChanged.addListener(translate);

translate();

function translate(){
    chrome.storage.sync.get(null, function(data){
        if(data.language == null){
            getTranslatedWord();
        }
        if (data.enabled == true){
            getTranslatedWord();
        }
    });
}

function getTranslatedWord(){
    chrome.storage.sync.get(null, function(data) {
        if (data.language == null){
            chrome.storage.sync.set({
                language: "es",
                name: "Spanish",
                enabled: true
            });
            findReplace();
        }
        else{
            findReplace();
        }
    });
}

function findReplace(){
    chrome.storage.sync.get(null, function(data){
        var language = data.language;
        var paragraphIndex;
        var apiKey = "AIzaSyCL9jeVEeDwzPxHXkDv39woblcUc538pDM";
        var apiSource = "en";
        var $p = $("p:eq(0)");
        var pString = $p.text();
        pString = pString.split(" ");
        paragraphIndex = Math.floor((Math.random() * pString.length) + 1);
        var word = pString[paragraphIndex];

        var url = 'https://www.googleapis.com/language/translate/v2' +
            '?key=' + apiKey +
            '&source=' + apiSource +
            '&target=' + language +
            '&q=' + word;
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