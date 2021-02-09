const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

// Create, Read, Update, Delete 311-2

const createInvoice = (req, res) => {
  let sql = "INSERT INTO Invoices (firstName, lastName, PASSWORD, email) VALUES (?, ?, ?, ?);"
  
  sql = mysql.format(sql, [req.body.firstName, req.body.lastName, req.body.password, req.body.email])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json({ newId: results.insertId });
  })
}

const listInvoices = (req, res) => {
  pool.query('SELECT * FROM Invoices', (err, rows) => {
    if (err) {
      console.log({ 'message': 'Error occurred: ' + err })
      return handleSQLError(res, err)
    }
    res.json(rows)
  });
}

const getInvoiceById = (req, res) => {

  let sql = `SELECT * FROM Invoices JOIN usersAddress, usersContact WHERE users.id = usersAddress.user_id AND users.id = usersContact.user_id AND users.id = ?;`
  
  sql = mysql.format(sql, [req.params.id])

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const updateInvoiceById = (req, res) => {

  let sql = "UPDATE Invoices SET firstName = ?, lastName = ? WHERE id = ?;"
  
  sql = mysql.format(sql, [req.body.firstName, req.body.lastName, req.params.id])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })
}

const deleteInvoiceByFirstName = (req, res) => {

  let sql = "DELETE from Invoices where firstName = ?"
  
  sql = mysql.format(sql, [req.params.firstName])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json({ message: `Deleted ${results.affectedRows} user(s)` });
  })
}

const deleteInvoiceByID = (req, res) => {

  let sql = "DELETE from Invoices where id = ?"

  sql = mysql.format(sql, [req.params.id])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json({ message: `Deleted ${results.affectedRows} user(s)` });
  })
}

module.exports = { 
  createInvoice, 
  listInvoices, 
  getInvoiceById, 
  updateInvoiceById, 
  deleteInvoiceByFirstName,
  deleteInvoiceByID 
}


