const colors = require("colors");

function baseTasks(text, time) {
  return new Promise((resolve) => {
    setTimeout(() => { resolve(text) }, time * 1000)
  })
}

const task1 = () => baseTasks("Terminou a Task 1 em 10 segundos".red, 10)

const task2 = () => baseTasks("Terminou a Task 2 em 5 segundos".magenta, 5)

const task3 = () => baseTasks("Terminou a Task 3 em 4 segundos".cyan, 4)

const task4 = () => baseTasks("Terminou a Task 4 em 4 segundos".green, 4)

module.exports = { task1, task2, task3, task4 };
