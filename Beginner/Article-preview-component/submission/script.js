const socials_profile = document.getElementById(
  "article_preview_socials_profile"
);

document.getElementById("share_button").addEventListener("click", () => {
  socials_profile.classList.contains("hidden_class")
    ? socials_profile.classList.remove("hidden_class")
    : socials_profile.classList.add("hidden_class");
});
