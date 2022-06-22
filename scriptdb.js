var input = document.getElementById("input1");

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("formulasearch").click();
  }
});
$(document).ready(function() {
  $("#formulasearch").click(function() {

      let x = document.getElementById("input1").value;
      document.getElementById("formulareturn").innerHTML = x.value;
      return console.log(x);
  });
  document.getElementById("exponentbutton").addEventListener("click", () =>{
      document.getElementById("input1").value += "²";
  });
  document.getElementById("lambdabutton").addEventListener("click", () =>{
      document.getElementById("input1").value += "λ";
  });
  document.getElementById("omegabutton").addEventListener("click", () =>{
      document.getElementById("input1").value += "Ω";
  });
  document.getElementById("deltabutton").addEventListener("click", () =>{
      document.getElementById("input1").value += "Δ";
  });
  document.getElementById("thetabutton").addEventListener("click", () =>{
      document.getElementById("input1").value += "θ";
  });
  document.getElementById("pibutton").addEventListener("click", () =>{
      document.getElementById("input1").value += "π";
  });
});