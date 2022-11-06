Steps

----------creating two folders (Client and Server)

---

Client

1. npx Create react app inside Client
2. Cleaning the npx created file
3. Creating HTML Login and Register in app.js
4. Creating some basic Css

---

Server

1. creating app.js file
2. npm init inside
3. in json create a "start:node app.js" so when i call "npm start" app.js we assignet to start in json
4. in app (

const express = require('express');
const mysql = require('mysql');

const app = express();

app.use(express.json());

const db = mysql.createConnection({
user: 'root',
host: 'localhost',
password: 'password',
database: 'loginsystem',
});

app.listen(3001, () => {
console.log('running server');
});)

5.

---

Data base

1. Choose local instance root
2. Inside create new "scheme=database" | name of it loginsystem
3. Create a new table | inside of it Tables
