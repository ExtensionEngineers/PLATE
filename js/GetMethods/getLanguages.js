//Callback function
function injectLanguages(response){
    var dropdownHTML = "";
    //<option value="fr">French</option>
    /*for(var i = 0; i < response.data.languages.length; i++){
        dropdownHTML += '<option value="';
        dropdownHTML += response.data.languages[i].language;
        dropdownHTML += '">';
        dropdownHTML += response.data.languages[i].name;
        dropdownHTML += '</option>';
    };
    $('#language').html(dropdownHTML);*/

    $.each(response.data.languages, function(i, item){
        dropdownHTML += '<option value="' + item.language + '">';
        dropdownHTML += item.name;
        dropdownHTML += '</option>';
    });
    $('#language').html(dropdownHTML);
}

//GET method
var url = "https://www.googleapis.com/language/translate/v2/languages?key=AIzaSyCL9jeVEeDwzPxHXkDv39woblcUc538pDM&target=en";
$.get(url, injectLanguages);