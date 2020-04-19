function generatedpassword() {
    var passLength = parseInt(prompt("Enter Length"));
    var AddSpecial = confirm("Add Special Character");
    var AddUpperC = confirm("Add an Uppercase Letter");
    var AddLowerC = confirm("Add a lowercase Letter");
    var AddNumbers = confirm("Add Numbers");
    var specialC = "!@#$%^&*()_?><";
    var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerChars = "abcdefghijklmnopqrstuvwxyz";
    var numberChars = "1234567890";
    var allChars = "";
    var generatePass = "";
    if (AddSpecial) {
      allChars += specialC;
    }
    if (AddUpperC) {
      allChars += upperChars;
    }
    if (AddLowerC) {
      allChars += lowerChars;
    }
    if (AddNumbers) {
      allChars += numberChars;
    }
    for (let i = 1; i <= passLength; i++) {
      var index = Math.floor(Math.random() * allChars.length);
      generatePass += allChars[index];
    }
    console.log("Password - ", generatePass);
    document.getElementById("displaypass").innerText = generatePass;
  }
 