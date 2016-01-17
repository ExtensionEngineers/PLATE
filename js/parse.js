
//selects the first paragraph tag

var n = 5;
var $p = $("p:eq(0)");
var pString = $p.text();
pString = pString.split(" ");

var word = pString[n];

if(translationOn() === true)
{
    var translatedPhrase = translate(word);
}
else
{
    var translatedPhrase = word;
}

pString[n] = translatedPhrase;

pString = pString.join(" ");

$p.html(pString);
