 
 
 function dateFunction()
        {
            var mydate = new Date();
            var day = mydate.getDate();
            var year = mydate.getFullYear();
            var month = mydate.getMonth() + 1;
            var stringday = day.toString();
            var stringyear = year.toString();
            var stringmonth = month.toString();
            document.getElementById("demo").innerHTML = stringmonth + "/" + stringday +"/" + stringyear;
            
         }
function monthFunction()
         {
             var mydate = new Date();
             var month = mydate.getMonth();
         }

function popupFunction()
{
var response;
var popup = confirm("Press a button");
if (popup == true) {
    response = "You pressed OK!";
} else {
    response = "You pressed Cancel!";
}
document.getElementById("popupbutton").innerHTML = response;
}

