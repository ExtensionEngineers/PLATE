
//selects the first paragraph tag
var $p = $("p:eq(0)");
var pString = $p.text();
pString = pString.split(" ");
length = pString.length;

var n = Math.floor((Math.random() * length) + 1);

var word = pString[n];

translate(word, n);
