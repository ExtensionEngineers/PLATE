
//selects the first paragraph tag


var n = 5;


var $p = $("p:eq(0)");
var pString = $p.text();
pString = pString.split(" ");
length = pString.length;


var word = pString[n];
var translatedPhrase;

if(translationOn() === true)
    {
        translatedPhrase = translate(word);
    }
else
    {
        translatedPhrase = word;
    }


var n = Math.floor((Math.random() * length) + 1);

var word = pString[n];

translate(word, n);
