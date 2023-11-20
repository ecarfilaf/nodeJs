// const fs = require("fs");

// fs.writeFile("message.txt", "Hello Node", (err) => {
//   if (err) throw err;
//   console.log("The file has been saved!");
// });

// fs.readFile("message.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

/******************************************************************************************************************* */
// var generateName = require('sillyname');
// var sillyName = generateName();

// console.log(`My name is ${sillyName}.`);

/******************************************************************************************************************* */
// import superheroes from 'superheroes';
 
// const me = superheroes.random();
// //=> 'Spider-Ham'
// console.log(`I'm ${me}`);

/******************************************************************************************************************* */
/* 
1. Use the inquirer npm package to get user input. ok
2. Use the qr-image npm package to turn the user entered URL into a QR code image. ok
3. Create a txt file to save the user input using the native fs node module. ok
*/

// import inquirer from 'inquirer';
// // var qr = require('qr-image');
// import qr from 'qr-image';

// import fs from "fs";

// const questions = [
// 	{
// 	  type: 'input',
// 	  name: 'url',
// 	  message: 'Url :'
// 	}];

// inquirer
// 	.prompt(questions)
// 	.then((answers) => {
// 		console.log(answers.url);
// 		var qr_svg = qr.image(answers.url, { type: 'png' });
// 		qr_svg.pipe(fs.createWriteStream('url.png'));

// 		fs.writeFile("url.txt", answers.url, (err) => {
// 			if (err) throw err;
// 			console.log("The file has been saved!");
// 		});
// 	})
// 	.catch((error) => {
// 	if (error.isTtyError) {
// 		// Prompt couldn't be rendered in the current environment
// 		console.log(error);
// 	} else {
// 		// Something else went wrong
// 		console.log(error);
// 	}
// });

/******************************************************************************************************************* */

