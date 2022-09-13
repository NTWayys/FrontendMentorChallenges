const faqList = document.querySelectorAll(".li-drop");

const toggle = (e) => {
  if (e.target.nodeName === "IMG") {
    // Have down-arrow img inside LI tag
    e.target.parentNode.parentNode.classList.toggle("active");
  } else {
    e.target.parentNode.classList.toggle("active");
  }
};

for (faq of faqList) {
  faq.addEventListener("click", toggle);
  faq.addEventListener("mouseover", () => {
    document.getElementById("illustration-woman-box").style.translate =
      "10% -25%";
  });
  faq.addEventListener("mouseout", () => {
    document.getElementById("illustration-woman-box").style.translate =
      "10% -15%";
  });
}
