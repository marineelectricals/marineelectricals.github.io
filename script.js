window.addEventListener('load', function() {
  console.log('Page is loaded');
});

const button = document.getElementById("subscribe");
button.addEventListener("click", myFunction);

function myFunction() {
Notification.requestPermission(function(status) {
    console.log('Notification permission status:', status);
var title = "JavaScript Jeep";
icon = 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png';
var body = "It's Your boarding time";
var notification = new Notification(title, { body, icon });
});
}
