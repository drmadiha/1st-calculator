#! /usr/bin/env node
import inquirer from "inquirer";
const answer =await inquirer.prompt([
    {message:"Enter first number",type:"number",name:"firstNamber"},
{massage:"Enter Second number", type:"number",name:"secondNumber"},
{massage:"select one of the operetors to perform the action",type:"list",name:"operator",choices:["Addition","Subtraction","Multiplication","Division"],}]);
if (answer.operator ==="Addition")
{
    console.log(answer.firstNamber + answer.secondNumber);}
     else if(answer.operator ==="Subtraction"){
         console.log(answer.firstNamber-answer.secondNumber);
     } else if(answer.operator ==="Multiplication"){
         console.log(answer.firstNamber*answer.secondNumber);
     }
    else if(answer.operator ==="Division"){
         console.log(answer.firstNamber/answer.secondNumber);
     } {console.log('please select a valid operator');}
    