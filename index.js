const inquirer = require("inquirer");
const svg = require("./utils/generateSVG");
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
    name: "colorText",
    validate: function (input) {
      // Checks if input is HTML Color, 3 digit hex value, or 6 digit hex value
      // The check for length of 8 is there in case transparency value is provided
      return (
        isColor(input) ||
        input.length === 3 ||
        input.length === 6 ||
        input.length === 8
      );
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
    name: "colorShape",
    validate: function (input) {
      // Checks if input is HTML Color, 3 digit hex value, or 6 digit hex value
      // The check for length of 8 is there in case transparency value is provided
      return (
        isColor(input) ||
        input.length === 3 ||
        input.length === 6 ||
        input.length === 8
      );
    },
  },
];

// Checks if input color name is in HTML color array
function isColor(name) {
  for (const color in colors) {
    if (color.toLowerCase() === name.toLowerCase()) {
      return true;
    }
  }
  return false;
}

function createSVG(logo, text) {
  fs.writeFile(`logo_${text}.svg`, logo, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`>> SVG saved succesfully as logo_${text}.svg`);
    }
  });
}

function init() {
  inquirer.prompt(questions).then(function (answers) {
    let logo = svg(answers);
    createSVG(logo, answers.text);
  });
}

init();
