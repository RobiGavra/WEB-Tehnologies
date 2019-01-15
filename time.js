var currentTime = new Date();
var day = currentTime.getDate();
var month = currentTime.getMonth();
var year = currentTime.getFullYear();
   
var d = day + "/" + (month+1) + "/" +year;
    
document.getElementById('date_span').innerHTML = d;