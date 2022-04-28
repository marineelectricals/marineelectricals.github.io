///////////////////////////////////////////////////////////////////////////////////////////////////////
const prod_url = "https://sheets.googleapis.com/v4/spreadsheets/11T168daP9NRW9aA8zEO7LpTcnDgeU6SKEs9JPq9XLWE/values/STAGEWISE?key=AIzaSyBqf87IMEwSLnDl_ZSil2IDLS9oFszZgP8";
const   qc_url = "https://sheets.googleapis.com/v4/spreadsheets/1v_LYbmkknH9SiMMiwIcroxA_6q0kBNzKRrWmGiU6zS4/values/STAGEWISE?key=AIzaSyBqf87IMEwSLnDl_ZSil2IDLS9oFszZgP8";
///////////////////////////////////////////////////////////////////////////////////////////////////////
var k = 0, sw_sections = ["ps1jn", "ps2jn", "ps3Ajn", "ps3Bjn", "pfqcjn", "qs1jn", "qs2jn", "qs3Ajn", "qs3Bjn", "qfqcjn"];
///////////////////////////////////////////////////////////////////////////////////////////////////////
function prodUpdateDataValues(data) {
var texts1 = "",texts2 = "",texts3a = "",texts3b = "",textfqc = "";
for (let i = 0; i < 10; i++) {
    texts1  += "<li>" + data[0][i] + "</li>";
    texts2  += "<li>" + data[1][i] + "</li>";
    texts3a += "<li>" + data[2][i] + "</li>";
    texts3b += "<li>" + data[3][i] + "</li>";
    textfqc += "<li>" + data[4][i] + "</li>";
  }
  document.getElementById(sw_sections[0]).innerHTML = texts1;
  document.getElementById(sw_sections[1]).innerHTML = texts2;
  document.getElementById(sw_sections[2]).innerHTML = texts3a;
  document.getElementById(sw_sections[3]).innerHTML = texts3b;
  document.getElementById(sw_sections[4]).innerHTML = textfqc;
}

function qcUpdateDataValues(data) {
var texts1 = "",texts2 = "",texts3a = "",texts3b = "",textfqc = "";
for (let i = 0; i < 10; i++) {
    texts1  += "<li>" + data[0][i] + "</li>";
    texts2  += "<li>" + data[1][i] + "</li>";
    texts3a += "<li>" + data[2][i] + "</li>";
    texts3b += "<li>" + data[3][i] + "</li>";
    textfqc += "<li>" + data[4][i] + "</li>";
  }
  document.getElementById(sw_sections[5]).innerHTML = texts1;
  document.getElementById(sw_sections[6]).innerHTML = texts2;
  document.getElementById(sw_sections[7]).innerHTML = texts3a;
  document.getElementById(sw_sections[8]).innerHTML = texts3b;
  document.getElementById(sw_sections[9]).innerHTML = textfqc;
}
/*var valid;
for (let i = 0; i < 10; i++){
valid = "ps1tn" + (i + 1);
document.getElementById(valid).innerHTML = data[0][i];
}*/

///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
function getData(callback, url, k) {
  var sheetval = [], s1jn = [], s2jn = [], s3Ajn = [], s3Bjn = [], fqcjn = [];
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {

    if (xhr.readyState === 4 && xhr.status === 200) {
      var jsonData = JSON.parse(xhr.responseText);
      for (let i = 0; i < 10; i++) {
         s1jn[i] = jsonData.values[i+1][1];
         s2jn[i] = jsonData.values[i+1][3];
        s3Ajn[i] = jsonData.values[i+1][5];
        s3Bjn[i] = jsonData.values[i+1][7];
        fqcjn[i] = jsonData.values[i+1][9];
      }
      sheetval = [s1jn, s2jn, s3Ajn, s3Bjn, fqcjn];
      callback(sheetval);
    }

  };
  xhr.open("GET", url, true);
  xhr.send();
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
getData(prodUpdateDataValues, prod_url);
getData(qcUpdateDataValues,     qc_url);
///////////////////////////////////////////////////////////////////////////////////////////////////////
