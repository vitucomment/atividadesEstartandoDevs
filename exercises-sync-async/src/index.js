const { task1, task2, task3, task4 } = require("./tasks");

async function synchronousExecution(){
  console.log(await task1());
  console.log(await task2());
  console.log(await task3());
  console.log(await task4());
}

function asynchronousExecution(){
  task1().then(console.log)
  task2().then(console.log)
  task3().then(console.log)
  task4().then(console.log)
}

const params = process.argv
switch(params[2]){
  case "sync":
    console.log("Executando de forma síncrona: \n")
    synchronousExecution()
    break
  case "async":
    console.log("Executando de forma assíncrona: \n")
    asynchronousExecution()
    break
}
