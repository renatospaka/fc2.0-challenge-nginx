const express = require('express')
const mysql = require('mysql')


const config = {
  host: 'challenge-db',
  user: 'root',
  password: 'xupacabra',
  database: 'nodedb'
};
const connection = mysql.createConnection(config)

let sql = `CREATE TABLE IF NOT EXISTS people (name VARCHAR(255))`;
connection.query(sql);

sql = `INSERT INTO people(name) VALUES ('vai-que-cola')`;
connection.query(sql);

let texto = "<h1>Full Cycle</h1>"
sql = "SELECT name AS name FROM people"
connection.query(sql, function(err, rows, fields) {
  const nome = rows[0].name.toString()
  texto = texto + "<h2>Nome: " + nome +"</h2>"
  console.log(`Leu o nome ${nome}`)
})
connection.end();

const port = 3000
const app = express()
app.get('/', (req, res, next) => {
  res.send(texto)
})

app.listen(port, () => {
  console.log(`Executando na porta ${port}`)
})
