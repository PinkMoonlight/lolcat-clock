var time = new Date().getHours();
var messageText;
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM

var updateClock = function() {
var lolcat = document.getElementById("lolcat");
var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
var message = document.getElementById("timeEvent");

if (time == partyTime){
    messageText = "IZ PARTEE TIME!!";
	image = "https://cdn.animalencyclopedia.info/wp-content/uploads/2018/04/cat.jpg";
} else if (time == napTime) {
    messageText = "IZ NAP TIME...";
	image = "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBKHUZJ.img?h=416&w=624&m=6&q=60&u=t&o=f&l=f&x=1700&y=1854";
} else if (time == lunchTime) {
    messageText = "IZ NOM NOM NOM TIME!!";
	image = "https://www.thehappycatsite.com/wp-content/uploads/2017/08/can-cats-eat-ham.jpg"; 
} else if (time == wakeupTime) {
    messageText = "IZ TIME TO GETTUP.";
	image = "https://i1.wp.com/soycurioso.net/wp-content/uploads/2018/10/youzignpetsleep.jpg?resize=1023%2C607&ssl=1";
} else if (time < noon) {
    messageText = "Good morning!";
	image = "https://www.thehappycatsite.com/wp-content/uploads/2019/04/cat-books2.jpg";
} else if (time > evening) {
    messageText = "Good Evening!";
	image = "https://www.catster.com/wp-content/uploads/2019/01/Two-orange-and-white-tabby-kittens.jpg"; 
} else {
    messageText = "Good afternoon!";
	image = "https://secure.i.telegraph.co.uk/multimedia/archive/02830/cat_2830677b.jpg";
}
message.innerText = messageText;
lolcat.src = image;

showCurrentTime();
};
var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours 
    if (hours >= noon) 
    { 
        meridian = "PM"; 
    }  
    if (hours > noon) 
    { 
        hours = hours - 12; 
    }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};
updateClock();
var onesecond = 1000;
setInterval(updateClock, onesecond);

//Party Button
var button = document.getElementById("partyTimeButton");
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");
var isPartyTime = false;

var partyEvent = function() {
   
   if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
	  button.innerText = "Party Over";
	  button.style.backgroundColor = "#0A8DAB"; 
   }
   else {
      isPartyTime = false;
      time = new Date().getHours();
      button.innerText = "PARTY TIME!";
      button.style.backgroundColor = "#222"; 
   }
};

var wakeUpEvent = function() {
	wakeupTime = wakeUpTimeSelector.value;
};
var lunchTimeEvent = function() {
	lunchTime = lunchTimeSelector.value;
};
var napEvent = function() {
	napTime = napTimeSelector.value;
};

button.addEventListener("click", partyEvent);
wakeUpTimeSelector.addEventListener("change", wakeUpEvent);
lunchTimeSelector.addEventListener("change", lunchTimeEvent);
napTimeSelector.addEventListener("change", napEvent);



