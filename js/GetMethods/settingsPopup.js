var $language = $("#language");
var $enableButton = $("#enableButton");
var url = "https://www.googleapis.com/language/translate/v2/languages?key=AIzaSyCL9jeVEeDwzPxHXkDv39woblcUc538pDM&target=en";
$.get(url, injectLanguages);

//restores button the storage's state
chrome.storage.sync.get(null, function(data){
    if (data.enabled == true){
        $enableButton.text("On");
    }
    else if (data.enabled == false) {
        $enableButton.text("Off");
    }
    //else{  //this runs when the storage is uninitalized on install
    //    chrome.storage.sync.set({enabled: true});
    //}
});

$language.change(function() {
    chrome.storage.sync.set({
        name: $language.find(":selected").text(),
        language: $language.val()
    });
    //chrome.storage.sync.set({language: $language.val()});
});

$enableButton.click(function() {
    chrome.storage.sync.get(null, function(data){
        if ($enableButton.text() == "On"){
            $enableButton.text("Off");
            chrome.storage.sync.set({enabled: false});
            chrome.storage.sync.get(null, function(response){
                console.log(response.enabled);
            });
        }
        else{
            $enableButton.text("On");
            chrome.storage.sync.set({enabled: true});
            chrome.storage.sync.get(null, function(response){
                console.log(response.enabled);
            });
        }
    });
});

//Callback function
function injectLanguages(response) {
    var dropdownHTML = "";
    //<option value="fr">
    //  French
    //</option>
    $.each(response.data.languages, function(i, item){
        dropdownHTML += '<option value="' + item.language + '">';
        dropdownHTML +=     item.name;
        dropdownHTML += '</option>';
    });
    $('#language').html(dropdownHTML);

    chrome.storage.sync.get(null, function(data){
        $language.val(data.language);
    });
}