var $language = $("#language");

var url = "https://www.googleapis.com/language/translate/v2/languages?key=AIzaSyCL9jeVEeDwzPxHXkDv39woblcUc538pDM&target=en";
$.get(url, injectLanguages);

$language.change(function() {
    chrome.storage.sync.set({name: $language.find(":selected").text()});
    chrome.storage.sync.set({language: $language.val()});
});

//Callback function
function injectLanguages(response){
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
        //$("#language option[value='response.language']").prop('selected', true);

        console.log(data.name);
        console.log(data.language);
    });
}