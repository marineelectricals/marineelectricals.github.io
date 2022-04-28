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

const button2 = document.getElementById("unsubscribe");
button2.addEventListener("click", spawnNotification);

function spawnNotification(title, body, icon) {
  var dept = "Production:", stage = "S1";
  var title = dept + " Stage - " + stage;
  var jobNumber = 15000.01;
  var engineer = "engineer"
  var bodyText = jobNumber + "(" + engineer + ")";
  var img = "images/MEIL Logo.png";
  var options = {
    body: bodyText
    icon: img
  }
  var notification = new Notification(title, options);
}
