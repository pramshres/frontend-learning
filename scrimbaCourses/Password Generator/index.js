const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordFieldOne = document.querySelector("#passwordOne")
let passwordFieldTwo = document.querySelector("#passwordTwo")

function generatePassword() {
    passwordFieldOne.textContent = generate()
    passwordFieldTwo.textContent = generate()
}

function generate() {
    let password = ""
    for (let i = 0; i < 15; i++) {
        password += characters[Math.floor(Math.random() * characters.length)]
    }
    return password
}

function copy(element) {    
    var copyText = element.textContent;
    navigator.clipboard.writeText(copyText);
    alert("Copied the text: " + copyText);
}


