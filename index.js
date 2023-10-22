import color_module from "./utils/colors.json" assert { type: "json" };
const inquirer = require("inquirer");
const colors = color_module.data; // Get web-safe colors as array

const questions = [
  {
    message: "Please input your project title: ",
    name: "title",
    validate: function (input) {
      return input.length >= 3;
    },
  },
];

// Checks if input color name is in web-safe color array
function isColor(name) {
  for (const color of colors) {
    if (color.name.toLowerCase() === name.toLowerCase()) {
      return true;
    }
  }
  return false;
}

function init() {
  return;
}

init();
