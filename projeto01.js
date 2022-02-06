var prompt = require("prompt-sync")();

console.clear();

let pergunta1 = "";
let pergunta2 = "";
let pergunta3 = "";
let pergunta4 = "";
let pergunta5 = "";
let sim = 0;
const personagem = prompt("Digite o nome do seu personagem: ");

console.log(`A história inicia-se com ${personagem} descendente do Lendário Herói, que derrotou o Mal no passado com o Orbe da Luz. 
Séculos mais tarde o Orb é roubado pelo malfeitor Rei Demônio e cabe a você salvar o mundo do poder das Trevas e recuperar o Orbe da Luz.`);

console.log();

console.log(`${personagem} começa sua aventura em uma pequena aldeia até o momento em que lhe é revelado o seu grande fardo de trazer paz ao mundo.
Mas antes de sair em sua jornada o ancião lhe presenteia com a poderosa espada do antigo herói! Você aceita esse presente?`);

pergunta1 = prompt(`Responda apensas com sim ou nao: `)
  .toLowerCase()
  .replace(/ /g, "");

while (pergunta1 != "sim" && pergunta1 != "nao") {
  console.log();
  console.log("Você digitou uma opção inválida!");
  pergunta1 = prompt(`${personagem} digite novamente com apenas sim ou nao: `)
    .toLowerCase()
    .replace(/ /g, "");
    console.log();
}

if (pergunta1 == "sim") {
  sim++;
}

console.clear();

console.log(`${personagem} é enviado para um árduo treinamento no topo das montanhas, onde recebe ensinamentos sobre esgrima e magia.
Você sente-se capacitado para receber esse tipo de ensinamento?`);

pergunta2 = prompt(`Responda apensas com sim ou nao: `)
  .toLowerCase()
  .replace(/ /g, "");

while (pergunta2 != "sim" && pergunta2 != "nao") {
  console.log();
  console.log("Você digitou uma opção inválida!");
  pergunta2 = prompt(`${personagem} digite novamente com apenas sim ou nao: `)
    .toLowerCase()
    .replace(/ /g, "");
    console.log();
}

if (pergunta2 == "sim") {
  sim++;
}

console.clear();

console.log(`Mas adiante após ${personagem} ter entrado em alguns confrontos, ele se depara com um enorme inimigo. O General do exercicito do Rei Demônio!
${personagem} sente que não pode vencer essa batalha sozinho. Mas por sorte do destinho um grande Mago e uma belíssima Sacerdotisa aparecem nesse momento de necessidade.
Você aceita a ajuda desses nobres companheiros?`);

pergunta3 = prompt(`Responda apensas com sim ou nao: `)
  .toLowerCase()
  .replace(/ /g, "");

while (pergunta3 != "sim" && pergunta3 != "nao") {
  console.log();
  console.log("Você digitou uma opção inválida!");
  pergunta3 = prompt(`${personagem} digite novamente com apenas sim ou nao: `)
    .toLowerCase()
    .replace(/ /g, "");
    console.log();
}

if (pergunta3 == "sim") {
  sim++;
}

console.clear();

console.log(`Chegando ao grande castelo do Rei Demônio ${personagem} se depara com inúmeras escadarias repleta de monstros. 
Porém durante a luta contra os monstros, infinitos choques e explosões revelam uma passagem secreta na parede que levaria ${personagem} direto ao seu objetivo!
Você usa essa passagem ou sofre indefinidamente na batalha contra tantos inimigos?`);

pergunta4 = prompt(`Responda apensas com sim ou nao: `)
  .toLowerCase()
  .replace(/ /g, "");

while (pergunta4 != "sim" && pergunta4 != "nao") {
  console.log();
  console.log("Você digitou uma opção inválida!");
  pergunta4 = prompt(`${personagem} digite novamente com apenas sim ou nao: `)
    .toLowerCase()
    .replace(/ /g, "");
    console.log();
}

if (pergunta4 == "sim") {
  sim++;
}

console.clear();

console.log(`Uma incansável batalha se extendia contra o poderoso Rei Demônio, ${personagem} já quase sem forças e esperaças de vencer a batalha
se lembra de que o destino do mundo inteiro estava em suas mãos, família e preciosos amigos que havia feito durante a sua jornada e em um último golpe 
de esperaça lança um incrível golpe que derruba o lendário Orbe de Luz da mão do vilão. Com o poderoso Orbe de Luz em sua posse ${personagem} só precisa
concentrar o poder de toda a sua bondade para liberar seu imenso poder que acabara com o reinado de maldade e tirania do Rei Demônio!
Você libera toda a bondade de seu coração para deferir o golpe final no malfeitor Rei Demônio usando o poderoso Orbe de Luz? `);

pergunta5 = prompt(`Responda apensas com sim ou nao: `)
  .toLowerCase()
  .replace(/ /g, "");

while (pergunta5 != "sim" && pergunta5 != "nao") {
  console.log();
  console.log("Você digitou uma opção inválida!");
  pergunta5 = prompt(`${personagem} digite novamente com apenas sim ou nao: `)
    .toLowerCase()
    .replace(/ /g, "");
    console.log();
}

console.clear();

if (pergunta5 == "sim") {
  sim++;
}

const resultado = [
  "0 respostas Sim: Você falha miseravelmente.",
  "1 ou 2 respostas Sim: Você falha, mas ainda consegue fugir da situação.",
  "1 ou 2 respostas Sim: Você falha, mas ainda consegue fugir da situação.",
  "3 respostas Sim: Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.",
  "4 respostas Sim: Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.",
  "5 respostas Sim: Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.",
]

console.log(resultado[sim]);