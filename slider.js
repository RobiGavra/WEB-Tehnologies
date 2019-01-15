var i=0;
var images=[];
var time = 3000; //ms

images[0]='1.jpg';
images[2]='3.jpg';

function changeImg(){
    document.slider.src=images[i];
    if(i<images.length-1){
        i++;
    }
    else{i=0;}
    setTimeout("changeImg()",time);
}
window.onload=changeImg; images[1]='2.jpg';
            