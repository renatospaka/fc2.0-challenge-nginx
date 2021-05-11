const express = require('express')
const mysql = require('mysql')


const config = {
  host: 'db-mysql',
  user: 'root',
  password: 'xupacabra',
  database: 'nodedb'
};
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) VALUES('xupa-cabra')`;
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
