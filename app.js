$(document).ready(function(){

$('#header').scroll(function(){


$("html, body").animate({ scrollTop: $(document).height()-$(window).height() });
});


 $(function(){
        $("#weare").typed({
            strings: ["Experienced.", "Innovative.","Your Best Friend too."],
            typeSpeed:60,
               loop: true,
          contentType:'html',
            loopCount: false,
             backDelay: 2000
        });
          $(".owner-name").typed({
            strings: ["Sajan Khandelwal.", "Hitesh Nagpal.","Others."],
            typeSpeed:60,
               loop: true,
            
            loopCount: false,
             backDelay: 2000
        });
        
    });
new WOW().init();
});


 


var imageArray = new Array();

// Specify number of milliseconds between image switches.
var switchMilliseconds = 5000;

// Specify the id of the div or other HTML tag with the 
//   background image to switch.

var divID = 'header';

// To add more images, continue the pattern below.

imageArray[0] = 'http://previews.123rf.com/images/atic12/atic121501/atic12150100005/34973321-Detailansicht-Portr-t-junge-nerdy-Mann-in-gro-e-schwarze-Brille-das-Surfen-im-Internet-auf-pers-nlic-Lizenzfreie-Bilder.jpg';
imageArray[1] = 'http://previews.123rf.com/images/edhar/edhar1309/edhar130900990/22310615-Portrait-of-a-happy-African-American-entrepreneur-displaying-computer-laptop-in-office-Stock-Photo.jpg';
imageArray[2] = 'http://previews.123rf.com/images/stockbroker/stockbroker1408/stockbroker140800116/31001181-African-American-Man-Using-Laptop-At-Home-Stock-Photo-black.jpg';
imageArray[3] = 'http://il6.picdn.net/shutterstock/videos/13506251/thumb/1.jpg';


// No further customization needed in this JavaScript

function publishPicture(i) {
       // Standard syntax
document.getElementById(divID).style.background = 'url("'+imageArray[i]+' ") no-repeat no-repeat center center ';
$('#header').css({
     'background-size': 'cover'
});
i++;
if( i > (imageArray.length - 1) ) { i = 0; }
setTimeout('publishPicture('+i+')',switchMilliseconds);
}
publishPicture(0);


