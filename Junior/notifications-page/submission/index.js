function clearNotifications() {
  const newNoti = document.getElementsByClassName("notification");
  for (noti of newNoti) {
    noti.classList.remove("new");
  }
  document.getElementById("notification-amount").innerText = 0;
}
