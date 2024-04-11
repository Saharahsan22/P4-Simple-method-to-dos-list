#! /usr/bin/env node

import chalk, { Chalk } from "chalk";
import inquirer from "inquirer";
//inquirer  done
// array    
//function
//operators

let todos: string [] = [];

async function createTodo(todos:string[]) {
    do{
        let ans = await inquirer.prompt({
            type: "list",
            message: "select an operation",
            name: "select",
            choices: ["Add", "Update", "View", "Delete"],
        })
        if (ans.select == "Add") {
            console.log(chalk.bgRedBright("******************** WHAT YOU WANT TO ADD IN LIST********************"));
            let addTodo = await inquirer.prompt({
                type: "input",
                message: (chalk.bgGreen ("Add items in the list")),
                name: "todo",
            });
            todos.push(addTodo.todo);
            todos.forEach(todo => console.log(todo));
            //console.log(todos);
        }
        if (ans.select == "Update") {
            console.log(chalk.bgRedBright("******************** WHAT YOU WANT TO UPDATE*******************"));

            let updateTodo = await inquirer.prompt({
                type: "list",
                message: (chalk.bgBlue("Update items in the list")),
                name: "todo",
                choices: todos.map(item => item)
            });
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "Add items in the list",
                name: "todo",
            });
            let newTodo = todos.filter(val =>val !== updateTodo.todo);
            todos = [...newTodo,addTodo.todo];
            console.log(todos);
    
            todos.push(updateTodo.todo);
            todos.forEach(todo => console.log(todo));
            //console.log(todos);
        }
        if (ans.select == "View"){
            console.log(chalk.bgGray("********* TO DO LIST *****************"));
            console.log(todos);
            console.log("**************************************");
        }
         if (ans.select == "Delete") {
            console.log(chalk.bgMagentaBright("******************** WHAT YOU WANT TO DELETE*******************"));

            let deleteTodo = await inquirer.prompt({
                type: "list",
                message: (chalk.bgMagenta ("Update items in the list")),
                name: "todo",
                choices: todos.map(item => item)
            });
            let newTodo = todos.filter(val =>val !== deleteTodo.todo);
            todos = [...newTodo];
            todos.forEach(todo => console.log(todo));
            //console.log(todos);
         }  
    } while(true)
    }

createTodo(todos);