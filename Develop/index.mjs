// Packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";

// Create an array of options for license agreement
const options = [ 
  { name: "MIT", value: "mit" },
  { name: "GPLv2", value: "gplv2" },
  { name: "GPLv3", value: "gplv3" },
  { name: "Apache", value: "apache" },
  { name: "BSD 3-Clause", value: "BSD 3-Clause" },
]

// Create a function to write README file
function writeToFile(fileName, data) {
  const markdown = generateMarkdown(data);

  fs.writeFile(fileName, markdown, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Successfully wrote to ${fileName}`);
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt([
    {
    type: "input",
    name: "title",
    message: "Greetings! What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Write a short description about your project. (Examples include what was your motivation? Why did you build it? What problem does it solve? And what did you learn?)",
  },
  {
    type: "input",
    name: "table of contents",
    message: "List the table of contents (optional) you would like to use for this project.",
  },
  {
    type: "input",
    name: "usage",
    message: "How can I use this application?",
  },
  {
    type: "input",
    name: "installation",
    message: "How can I install this application on my computer?",
  },

  {
    type: "input",
    name: "test",
    message: "How do I test this application?",
  },
  {
    type: "input",
    name: "contribution",
    message: "",
  },
  {
    type: "list",
    name: "license",
    message: "What type of license would you like to use?",
    choices: options,
  },
])
.then((data) => {
  writeToFile("README.md", data);
})
.catch((err) => {
  console.log(err);
});
}

// Function call to initialize app
init();
