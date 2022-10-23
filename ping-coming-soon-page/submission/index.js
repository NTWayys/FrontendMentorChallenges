document.getElementById("verifyEmail").addEventListener("click", () => {
  const userEmail = document.getElementById("userEmail");
  if (validateEmail(userEmail.value)) {
    userEmail.classList.remove("error");
    console.log("yes");
  } else {
    userEmail.classList.add("error");
  }
});

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};
