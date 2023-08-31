var somar = require("./modulos/somar");
var media = require("./modulos/media");
var subtrair = require("./modulos/subtrair");
var dividir = require("./modulos/dividir");
var mensagem = require("./modulos/mensagem");

console.log("A soma de x e y é: " + somar(20,90));
console.log("A media de x e y é: " + media(20,90));
console.log("A subtração de x e y é: " + subtrair(20,90));
console.log("A divisão de x e y é: " + dividir(20,90));
console.log(mensagem("TucamaiaShow"));
