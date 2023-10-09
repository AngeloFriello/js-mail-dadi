// # verificare che l'utente posso entrare con la proprio email
// - chiedere l'email a l'utente tramite prompt
let email;
email = prompt ('digita la tua email');
console.log(email)
// - dichiarare un array con le email registrate
let validEmail = ['pasquale@gmail.com','andrea@gmail.com', 'pippo@pluto.com', 'michele@gmail.com','dario@gmail.com'];
// - dichiarare che un email puo accedere solo se registrata all'interno dell'array
//     - mandara un messaggio che dice se è stato ferificata l'email
let messageDomElement = document.getElementById('email');
let firstPartMessage = ('La tua email è:');
let valid = ('valida');
let notValid = ('non è valida');

let actualEmail;

for (let i = 0; i < validEmail.length; i++) {

    actualEmail = validEmail[i];

    if (actualEmail === email) {
        console.log('valida');
        messageDomElement.innerHTML = firstPartMessage + valid

    }
}
  // console.log(messageDomElement);