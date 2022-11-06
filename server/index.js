const express = require('express');
const mysql = require('mysql');
//----cors--alowing crosplatform front to back
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

//-----------MYSQL DATABASE Connection---------------
const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'Golf@123',
  database: 'loginsystem',
});
//---------------------------------------

//--------------route for register-------------
app.post('/register', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    'INSERT INTO users (username ,password) VALUES (?,?)',
    [username, password],
    (err, result) => {
      console.log(err);
    },
  );
});
//-----------------------------------------------

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    'SELECT * FROM users WHERE username = ? AND password = ?',
    [username, password],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) res.send(result);
      else {
        res.send({ message: 'No username/password combination' });
      }
    },
  );
});

app.listen(4000, () => {
  console.log('running server 4000');
});
