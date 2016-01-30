chrome.storage.onChanged.addListener(translate);

translate();

function translate(){
    chrome.storage.sync.get(null, function(data){
        //only happens upon  install
        if(data.language == null){
            chrome.storage.sync.set({
                language: "es",
                name: "Spanish",
                enabled: true
            });
            findReplace();
        }
        else if (data.enabled == true){
            findReplace();
        }
    });
}

function findReplace(){
    chrome.storage.sync.get(null, function(data){
        var language = data.language;
        var apiKey = "AIzaSyCL9jeVEeDwzPxHXkDv39woblcUc538pDM";
        var apiSource = "en";

        $.each($("p"), function(index, paragraph) {
            var $paragraph = $(paragraph);
            var pString = $paragraph.text();
            pString = pString.split(" ");

            if (pString[0] != "") {
                var paragraphIndex = Math.floor((Math.random() * pString.length));
                var word = pString[paragraphIndex];

                var url = 'https://www.googleapis.com/language/translate/v2' +
                    '?key=' + apiKey +
                    '&source=' + apiSource +
                    '&target=' + language +
                    '&q=' + word;

                $.get(url, function (response) {
                    var translatedWord = response.data.translations[0].translatedText;
                    pString[paragraphIndex] = "<element class='translation' id='translation" + index + "'>" + translatedWord + "</element>";
                    pString = pString.join(" ");
                    $paragraph.html(pString);
                    var $translation = $("#translation" + index);
                    $translation.qtip({content: {text: word}});
                });
            }
        });
    });
}

