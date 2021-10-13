# Synoptic Project Practice

## Quiz Manager

### Getting Started
I'll be creating a JavaScript app / API using Node, Express.js and Handlebars.

This README.md is based on the assumption that you are using a Mac computer as that is what I used for this project.

Navigate in your terminal to the directory where you want to clone the repository.

`git clone https://github.com/IK982/PracticeProject.git`

Assuming that you Node.js and NPM installed in that location, in Terminal:
`npm install`

### Database Setup

If you don't already have MySql, install here:
https://dev.mysql.com/downloads/mysql/

If you don't already have MySql Workbench, install here:
https://www.mysql.com/products/workbench/


Open SQL workbench and ensure you can create a new database (choose or add an existing connection. Once you have a connection, add the username and password credentials to `.env` file.
```
MYSQL_USER="<MySQL_username>"
MYSQL_PASSWORD="<MySQL_password>"
```

On MySQL Workbench, click the database icon - "Create a new schema" at the top and ake the schema name `quizmanager`


### IDE

I have used Visual Studio Code as my IDE, but use the IDE you feel most comfortable with.

### Run Project
In the terminal, navigate to the directory where your project lives and run this command to install the required dependencies:
`npm install`
