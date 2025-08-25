#!/usr/bin/env node

import inquirer from "inquirer";

import fs from "fs";

import { Command } from "commander";

const program = new Command();

const questions = [
  {
    type: "input",
    name: "title",
    message: "Please Enter Course Title",
  },
  {
    type: "number",
    name: "price",
    message: "Please Enter Course Price",
  },
];

const questionUpdate = [
  {
    type: "input",
    name: "title",
    message: "Please Enter Course Title",
  },
  {
    type: "input",
    name: "newTitle",
    message: "Please Enter Course update Title",
  },
  {
    type: "number",
    name: "newPrice",
    message: "Please Enter Course update Price",
  },
];
const filePath = "./courses.json";

program
  .name("cli-courses-manager")
  .description("cli to make courses")
  .version("1.0.0");

program
  .command("add")
  .alias("a")
  .description("Add a new course")
  .action(() => {
    inquirer.prompt(questions).then((answers) => {
      if (fs.existsSync(filePath)) {
        fs.readFile(filePath, "utf8", (err, fileContent) => {
          if (err) {
            console.log("Error", err);
            process.exit();
          }
          const fileContentAsJson = JSON.parse(fileContent);
          fileContentAsJson.push(answers);
          fs.writeFile(filePath, JSON.stringify(fileContentAsJson), (err) => {
            if (err) console.log("Error", err);
            console.log("Add Course Done");
          });
        });
      } else {
        fs.writeFile(filePath, JSON.stringify([answers]), (err) => {
          if (err) console.log("Error", err);
          console.log("Add Course Done");
        });
      }
    });
  });

program
  .command("delete")
  .alias("d")
  .description("Delete a course")
  .action(() => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "title",
          message: "Please Enter Courses Name",
        },
      ])
      .then((answers) => {
        fs.readFile(filePath, "utf8", (err, fileContent) => {
          if (err) {
            console.log("Error", err);
            process.exit();
          }
          const content = JSON.parse(fileContent);
          const contentNew = content.filter((course) => {
            return course.title !== answers.title;
          });
          fs.writeFile(filePath, JSON.stringify(contentNew), (err) => {
            if (err) console.log("Error", err);
          });
          console.log(`Course ${answers.title} Deleted Successfully`);
        });
      });
  });

program
  .command("update")
  .alias("u")
  .description("Update Course Content")
  .action(() => {
    inquirer.prompt(questionUpdate).then((answers) => {
      fs.readFile(filePath, "utf8", (err, fileContent) => {
        if (err) {
          console.log("Error", err);
          process.exit();
        }
        const content = JSON.parse(fileContent);
        const contentNew = content.map((course) => {
          if (course.title === answers.title) {
            course.title = answers.newTitle ? answers.newTitle : course.title;
            course.price = answers.newPrice ? answers.newPrice : course.price;
          }
          return course;
        });

        fs.writeFile(filePath, JSON.stringify(contentNew), (err) => {
          if (err) console.log("Error", err);
        });
        console.log(`Course ${answers.title} Updated Successfully`);
      });
    });
  });

program
  .command("list")
  .alias("l")
  .description("List all courses")
  .action(() => {
    fs.readFile(filePath, "utf8", (err, fileContent) => {
      if (err) {
        console.log("Error", err);
        process.exit();
      }
      console.table(JSON.parse(fileContent));
    });
  });

program.parse(process.argv);
