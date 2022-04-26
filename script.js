window.addEventListener('load', function() {
  console.log('Page is loaded');
});

const button = document.getElementById("subscribe");
button.addEventListener("click", myFunction);

function myFunction() {
Notification.requestPermission(function(status) {
    console.log('Notification permission status:', status);
});
}
