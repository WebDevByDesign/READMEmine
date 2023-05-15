// Packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";

// Create an array of options for license agreement
const options = [ 
  { name: "MIT", value: "MIT" },
  { name: "GPLv2", value: "GPLv2" },
  { name: "GPLv3", value: "GPLv3" },
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
 

// Create a function to initialize questions
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
    message: "Write a short description about your project. (Some examples: What was your motivation? Why did you build it? What problem does it solve? And what did you learn?)",
  },
  {
    type: "input",
    name: "screenshot",
    message: "Screenshot (optional) setup feature, will auto populate in your new README.md file. Additional instructions will be provided. Press return to continue.",
  },
  {
    type: "input",
    name: "table of contents",
    message: "Table of contents section added - press return to confirm.",
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
    message: "Add contributors",
  },
  {
    type: "list",
    name: "license",
    message: "What type of license would you like to use?",
    choices: options,
  },
  {
    type: "input",
    name: "githubusername",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your e-mail address?",
  },
])
.then((data) => {
  writeToFile("./utils/README.md", data);
})
.catch((err) => {
  console.log(err);
});
}

// Function call to initialize app
init();
