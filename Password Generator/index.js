const passwordEl = document.getElementById("password-el");
const generateBtn = document.getElementById("generate-btn");
const copyBtn = document.getElementById("copy-btn");
const lengthEl = document.getElementById("length-el");
const lengthText = document.getElementById("length-text");

generateBtn.addEventListener("click", function () {
  generate(lengthEl.value);
  lengthText.textContent = lengthEl.value;
});

lengthEl.addEventListener("input", function () {
  generate(lengthEl.value);
  lengthText.textContent = lengthEl.value;
});

copyBtn.addEventListener("click", function () {
  navigator.clipboard.writeText(passwordEl.value);
});

function generate(length=6) { 
  charset = "abcdefghijklmnopqrstuvwxyz@&$!#!ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
  retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  passwordEl.value = retVal;
}

generate();
