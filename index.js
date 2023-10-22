const inquirer = require("inquirer");
const fs = require("fs");

// Get HTML colors from colors.json file
const colors = JSON.parse(fs.readFileSync("./utils/colors.json"));

const questions = [
  {
    message: "Please enter logo text (up to 3 characters): ",
    name: "text",
    validate: function (input) {
      return input.length <= 3 && input.length > 0;
    },
  },
  {
    message:
      "Please choose a color for your logo text (HTML5 color keyword or hexadecimal value): ",
    name: "color-text",
    validate: function (input) {
      // Checks if input is HTML Color, 3 digit hex value, or 6 digit hex value
      return isColor(input) || input.length === 3 || input.length === 6;
    },
  },
  {
    type: "list",
    message: "Please choose a shape for your logo: ",
    name: "shape",
    choices: ["Square", "Circle", "Triangle"],
  },
  {
    message:
      "Please choose a color for your shape (HTML5 color keyword or hexadecimal value): ",
    name: "color-shape",
    validate: function (input) {
      // Checks if input is HTML Color, 3 digit hex value, or 6 digit hex value
      return isColor(input) || input.length === 3 || input.length === 6;
    },
  },
];

// Checks if input color name is in HTML color array
function isColor(name) {
  for (const color of colors) {
    if (colortoLowerCase() === name.toLowerCase()) {
      return true;
    }
  }
  return false;
}

function init() {
  inquirer.prompt(questions).then(function (answers) {
    console.log(answers);
  });
}

init();
