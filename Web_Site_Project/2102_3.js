const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", () => {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var visitDate = document.getElementById("visit-date").value;
  var message = document.getElementById("message").value;

  var alertMessage = "방문자 정보" + "\n";
  alertMessage += "=========================" + "\n";
  alertMessage += "이름 : " + name + "\n";
  alertMessage += "이메일 : " + email + "\n";
  alertMessage += "방문일 : " + visitDate + "\n";
  alertMessage += "내용 : " + message + "\n";
  alertMessage += "=========================";
  alert(alertMessage);
});
