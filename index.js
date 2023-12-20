const { activitiesDefault, activitiesAgriculture } = require("./activities");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const usuario = {
  name: "",
  age: "",
  profession: "",
};

function askQuestion(activities, index) {
  if (index >= activities.length) {
    return;
  }

  const activity = activities[index];
  console.log("Responda a questão abaixo: ");
  console.log("***************************");
  console.log(activity.title);
  console.log("***************************");
  activity.alternatives.forEach((item, index) => {
    console.log(`${index} - ${item}`);
  });

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Insira sua alternativa: ", (response) => {
    if (response == activity.responseKey) {
      console.log("Você ACERTOU! NOTA 10");
    } else {
      console.log("Ops, você errou! Não se preocupe, estamos aqui para ajudar");
    }
    rl.close();
    askQuestion(activities, index + 1); // Chamar a próxima questão
  });
}

function generateActivity() {
  if (usuario.profession == 1) {
    askQuestion(activitiesDefault, 0);
  } else {
    askQuestion(activitiesAgriculture, 0);
  }
}

function getDateUser() {
  rl.question("Por favor, insira seu nome: ", (name) => {
    usuario.name = name;
    rl.question("Por favor, insira sua idade: ", (age) => {
      usuario.age = age;
      rl.question(
        "Por favor, insira sua profissão | 1 - Agricultor, 0 - Outros: ",
        (profession) => {
          usuario.profession = profession;
          rl.close();
          generateActivity();
        }
      );
    });
  });
}

getDateUser();
