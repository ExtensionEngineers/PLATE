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
                    var htmlString = $paragraph.html();

                    if(paragraphIndex == 0){
                        htmlString = htmlString.replace(word + " ", "<element class='translation' id='translation" + index + "'>" + translatedWord + "</element> ");
                    }
                    else if(paragraphIndex == pString.length){
                        htmlString = htmlString.replace(" " + word, " <element class='translation' id='translation" + index + "'>" + translatedWord + "</element>");
                    }
                    else{
                        htmlString = htmlString.replace(" " + word + " ", " <element class='translation' id='translation" + index + "'>" + translatedWord + "</element> ");
                    }
                    $paragraph.html(htmlString);
                    var $translation = $("#translation" + index);
                    $translation.qtip(
                        {
                            content: {
                                text: word,
                                title: "Translation"
                            },
                            classes: 'count-down-bubble',
                            position: {
                                my: 'bottom center',
                                at: 'top center',
                            },
                            show: {
                                effect: function() {
                                    $(this).slideDown();
                                }
                            },
                            hide: {
                                effect: function() {
                                    $(this).slideUp();
                                },
                            }
                        }
                    );
                });
            }
        });
    });
}

