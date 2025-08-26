## cli-courses-manager

**cli-courses-manager** is a simple command-line tool to manage courses.  
You can easily **add, delete, update, and list courses** directly from your terminal.

This project was built using:
- [Commander](https://www.npmjs.com/package/commander) → To handle CLI commands  
- [Inquirer](https://www.npmjs.com/package/inquirer) → To ask interactive questions (title, price, etc.)  
- [fs](https://nodejs.org/api/fs.html) → To store and manage courses locally 

---

### Features
- 📌 Add a new course (asks for title and price)
- 🗑️ Delete a course by title
- ✏️ Update an existing course
- 📋 List all courses with their details
- 💾 Data is saved locally using `fs`

---

### Languages & Tech Stack
- **JavaScript (ES6)**  
- **Node.js**  

---

### 🔗 Links

- Direct npm package link → [https://www.npmjs.com/package/cli-courses-manager](https://www.npmjs.com/package/cli-courses-manager)  
- Your GitHub repo link → [https://github.com/Abdelmagidawad/cli-courses-manager](https://github.com/Abdelmagidawad/cli-courses-manager)  

---


### Installation

- Install the package  from **npm** and Usage :

```bash  
- Install the package globally from **npm**:

npm install -g cli-courses-manager

- After installation, you can use the command:

cli-courses-manager

# Usage

- The main command is:

cli-courses-manager <command>

#Available Commands

1. Add a course
cli-courses-manager add

2. Delete a course
cli-courses-manager delete

3. Update a course
cli-courses-manager update

4. List all courses
cli-courses-manager list




