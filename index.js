const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSpecialCharacters = "!@#$%^&*()_+";
const rangeValue = document.getElementById("password-length");
const passWord = document.getElementById("password-output");

const generateButton = document.getElementById("generateButton");
function generatePassword() {
  let data = [];
  let password = "";
  // pour connaitre les données choisies avec l'id sur le html
  // ... pour casser la chaine de caractère en un tableau
  if (lowercase.checked) data.push(...dataLowercase);
  if (uppercase.checked) data.push(...dataUppercase);
  if (numbers.checked) data.push(...dataNumbers);
  if (symbols.checked) data.push(...dataSpecialCharacters);
  if (data.length === 0) {
    alert("Veuillez choisir au moins un type de caractère");
    return;
  }

  // pour connaitre la longueur du mot de passe
  for (i = 0; i < rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
  }
  // on fait point value car il s'agit d'un input donc le innerhtml ne fonctionne pas
  passWord.value = password;
  //pour selectionner et copie du text
  passWord.select();
  document.execCommand("copy");
  setTimeout(() => {
    generateButton.textContent = "Générer mot de passe";
  }, 2000);
  generateButton.textContent = "Copier";
}
generateButton.addEventListener("click", generatePassword);
