const express = require('express')
const mysql = require('mysql')


const config = {
  host: 'challenge-db',
  user: 'root',
  password: 'xupacabra',
  database: 'nodedb'
};
const connection = mysql.createConnection(config)

let sql = `CREATE TABLE people (name VARCHAR(255))`;
connection.query(sql);

sql = `INSERT INTO people(name) VALUES ('vai-que-cola')`;
connection.query(sql);
connection.end();

const port = 3001
const app = express()
app.get('/', (req, res, next) => {
  res.send('<h1>Full Cycle</h1>')
})
app.listen(port, () => {
  console.log(`Executando na porta ${port}`)
})
