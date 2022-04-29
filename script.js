window.addEventListener('load', function() {
  console.log('Page is loaded');
});

function spawnNotifications() {
  var notification = new Notification("Hi there!");
}
const button2 = document.getElementById("subscribe");
button2.addEventListener("click", myFunction);
/////////////////////////////////////////////////////////////////////////////////////////
const check = () => {
  if (!('serviceWorker' in navigator)) {
    throw new Error('No Service Worker support!');
  }
  if (!('PushManager' in window)) {
    throw new Error('No Push API Support!');
  }
}
const registerServiceWorker = async () => {
  const swRegistration = await navigator.serviceWorker.register('service.js');
  return swRegistration;
}
const requestNotificationPermission = async () => {
  const permission = await window.Notification.requestPermission();
  // value of permission can be 'granted', 'default', 'denied'
  // granted: user has accepted the request
  // default: user has dismissed the notification permission popup by clicking on x
  // denied: user has denied the request.
  if (permission !== 'granted') {
    throw new Error('Permission not granted for Notification');
  }
}
const main = async () => {
  check();
  const swRegistration = await registerServiceWorker();
  const permission = await requestNotificationPermission();
}
// main(); we will not call main in the beginning.

const button3 = document.getElementById("btnswnotify");
button3.addEventListener("click", main);
///////////////////////////////////////////////////////////////////////////////////////////////

const button = document.getElementById("subscribe");
button.addEventListener("click", myFunction);

function myFunction() {
Notification.requestPermission(function(status) {
    console.log('Notification permission status:', status);
});
}
