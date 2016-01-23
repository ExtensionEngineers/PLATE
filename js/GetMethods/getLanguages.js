var $language = $("#language");
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
}

var url = "https://www.googleapis.com/language/translate/v2/languages?key=AIzaSyCL9jeVEeDwzPxHXkDv39woblcUc538pDM&target=en";
//GET method
$.get(url, injectLanguages);

$("#language").change(function() {
    chrome.storage.sync.set({language: $language.val()});
});