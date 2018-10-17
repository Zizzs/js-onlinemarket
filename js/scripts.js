var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];





$(document).ready(function() {




  $("form#purchase").submit(function(event) {
    var nameTemp = $("input#nameInput").val();
    $(".modalName").text(nameTemp);
    event.preventDefault();
  });

  $("form#purchase").submit(function(event) {
    var addressTemp = $("input#addressInput").val();
    $(".modalAddress").text(addressTemp);
    event.preventDefault();
  });

  $("form#purchase").submit(function(event) {
    var purchase1Temp = $("select#purchase1Input").val();
    $(".modalPurchase1").text(purchase1Temp);
    event.preventDefault();
  });

  $("form#purchase").submit(function(event) {
    var purchase2Temp = $("input#purchase2Input").val();
    $(".modalPurchase2").text(purchase2Temp);
    event.preventDefault();
  });

  $("form#purchase").submit(function(event) {
    var purchase3Temp = $("input#purchase3Input").val();
    $(".modalPurchase3").text(purchase3Temp);
    event.preventDefault();
  });

  $("form#purchase").submit(function(event) {
    var purchase4Temp = $("input#purchase4Input").val();
    $(".modalPurchase4").text(purchase4Temp);
    event.preventDefault();
  });

  btn.onclick = function() {
    modal.style.display = "block";
  }

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
  }}

});
