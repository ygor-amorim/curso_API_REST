function helloWorld() {
  console.log("Hello World!");
}

function saudacao() {
  var data = new Date();
  return data.getHours() <= 12 ? "Bom Dia" : data.getHours() <= 18 ? "Boa Tarde" : "Boa Noite";
}

helloWorld();

console.log(saudacao());






