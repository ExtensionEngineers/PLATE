var transOn = true;
//var onOffButtonText = "Turn Off";

function translationOn()
{
    return transOn;
}


//function toggle()
//{
//    if (translationOn == true) {
//        translationOn = false;
//    }
//    else {
//        translationOn = true;
//    }
//
//    if (translationOn == false) {
//        onOffButtonText = 'Turn On';
//    }
//    else {
//        onOffButtonText = 'Turn Off';
//    }
//}

var $enableButton = $("#enableButton");
$enableButton.click(function()
{
    if($enableButton.text() === "Turn On")
    {
        $enableButton.text("Turn Off")
    }
    else {$enableButton.text("Turn On")}

    if (transOn === true)
    {
        transOn = false;
    }
    else
    {
        transOn = true;
    }
});