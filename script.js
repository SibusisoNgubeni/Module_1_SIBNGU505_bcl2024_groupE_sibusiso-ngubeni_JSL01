function validateSyntax() {
  let input = document.getElementById("petInput").value;

  let result1 = "Syntax is valid 🟢";
  let result2 = "Syntax is invalid 🔴";

  if (input.match(/^pet_\d{4}\S+$/)) {
    return result1;
  } else {
    return result2;
  }
}

document.getElementById("petInput").addEventListener("input", function () {
  document.getElementById("result").innerText = validateSyntax();
});

document.getElementById("results").addEventListener("click", function () {
  alert(validateSyntax());
});
