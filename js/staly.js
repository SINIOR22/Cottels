const acc = document.getElementsByClassName("accordion-item-title");
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function()  {
    this.classList.toggle("block");
    const panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
}) 
}
