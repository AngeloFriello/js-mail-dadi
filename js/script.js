// # verificare che l'utente posso entrare con la proprio email
// - chiedere l'email a l'utente tramite prompt
let email;
email = prompt ('digita la tua email');
console.log(email)
// - dichiarare un array con le email registrate
const validEmail = ['pasquale@gmail.com','andrea@gmail.com','francesco@gmail.com','giuseppe@gmail.com','marco@gmail.com']
// - dichiarare che un email puo accedere solo se registrata all'interno dell'array
// - mandara un messaggio che dice se è stato ferificata l'email