function validateSyntax() {
  let input = document.getElementById("petInput").value;

  let result = input.match(/^pet_\d{4}\S+$/)
    ? "Valid Syntax 🟢"
    : "Invalid Syntax 🔴";

  document.getElementById("result").innerText = result;
}

document.getElementById("petInput").addEventListener("input", function () {
  validateSyntax();
});

document.getElementById("results").addEventListener("click", function () {
  alert(validateSyntax());
});
