const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const emailAddress = document.getElementById("email-address");
const password = document.getElementById("password");

document.getElementById("submit-btn").addEventListener("click", () => {
  event.preventDefault();
  if (!firstName.value) {
    document.getElementById("first-name-div").classList.add("error");
  }
  if (!lastName.value) {
    document.getElementById("last-name-div").classList.add("error");
  }
  if (!password.value) {
    document.getElementById("password-div").classList.add("error");
  }
  if (looksLikeMail(emailAddress.value) === false) {
    console.log("test");
    document.getElementById("email-address-div").classList.add("error");
  }

  if (firstName.value) {
    document.getElementById("first-name-div").classList.remove("error");
  }
  if (lastName.value) {
    document.getElementById("last-name-div").classList.remove("error");
  }
  if (password.value) {
    document.getElementById("password-div").classList.remove("error");
  }
  if (looksLikeMail(emailAddress.value) === true) {
    document.getElementById("email-address-div").classList.remove("error");
  }
});
function looksLikeMail(str) {
  var lastAtPos = str.lastIndexOf("@");
  var lastDotPos = str.lastIndexOf(".");
  return (
    lastAtPos < lastDotPos &&
    lastAtPos > 0 &&
    str.indexOf("@@") == -1 &&
    lastDotPos > 2 &&
    str.length - lastDotPos > 2
  );
}
