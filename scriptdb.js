var input = document.getElementById("formulainput");

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("formulasearch").click();
  }
});