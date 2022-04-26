let url = "https://sheets.googleapis.com/v4/spreadsheets/11T168daP9NRW9aA8zEO7LpTcnDgeU6SKEs9JPq9XLWE/values/PROD-QC-STAGES?key=AIzaSyBqf87IMEwSLnDl_ZSil2IDLS9oFszZgP8";

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

function spawnNotification(body, icon, title) {
  var title = "Notify";
  var options = {
      body: "Hi There"
  }
  var notification = new Notification(title, options);
}
