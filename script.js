// Define spreadsheet URL.
var prodss = 'https://docs.google.com/spreadsheets/d/11T168daP9NRW9aA8zEO7LpTcnDgeU6SKEs9JPq9XLWE/edit#gid=0';
var qcss = 'https://docs.google.com/spreadsheets/d/11T168daP9NRW9aA8zEO7LpTcnDgeU6SKEs9JPq9XLWE/edit#gid=843385812';

$('production').sheetrock({
  url: prodss,
  query: "select A",
  fetchSize: 11
});

window.addEventListener('load', function() {
  console.log('Page is loaded');
});

Notification.requestPermission(function(status) {
    console.log('Notification permission status:', status);
});

function displayNotification() {
  if (Notification.permission === 'granted') {  
    navigator.serviceWorker.getRegistration()
    .then(function(reg){
      reg.showNotification('Hello world!');
    });
  }
}
