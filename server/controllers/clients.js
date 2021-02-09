const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

// Create, Read, Update, Delete 311-2

const createClient = (req, res) => {
  let sql = "INSERT INTO Clients (firstName, lastName, PASSWORD, email) VALUES (?, ?, ?, ?);"
  
  sql = mysql.format(sql, [req.body.firstName, req.body.lastName, req.body.password, req.body.email])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json({ newId: results.insertId });
  })
}

const listClients = (req, res) => {
  pool.query('SELECT * FROM Clients', (err, rows) => {
    if (err) {
      console.log({ 'message': 'Error occurred: ' + err })
      return handleSQLError(res, err)
    }
    res.json(rows)
  });
}

const getClientById = (req, res) => {

  let sql = `SELECT * FROM Clients JOIN usersAddress, usersContact WHERE users.id = usersAddress.user_id AND users.id = usersContact.user_id AND users.id = ?;`
  
  sql = mysql.format(sql, [req.params.id])

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const updateClientById = (req, res) => {

  let sql = "UPDATE Clients SET firstName = ?, lastName = ? WHERE id = ?;"
  
  sql = mysql.format(sql, [req.body.firstName, req.body.lastName, req.params.id])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })
}

const deleteClientByFirstName = (req, res) => {

  let sql = "DELETE from Clients where firstName = ?"
  
  sql = mysql.format(sql, [req.params.firstName])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json({ message: `Deleted ${results.affectedRows} user(s)` });
  })
}

const deleteClientByID = (req, res) => {

  let sql = "DELETE from Clients where id = ?"

  sql = mysql.format(sql, [req.params.id])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json({ message: `Deleted ${results.affectedRows} user(s)` });
  })
}

module.exports = { 
  createClient, 
  listClients, 
  getClientById, 
  updateClientById, 
  deleteClientByFirstName,
  deleteClientByID 
}


