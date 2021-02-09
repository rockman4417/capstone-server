const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

// Create, Read, Update, Delete 311-2

const createTemplate = (req, res) => {
  let sql = "INSERT INTO Templates (firstName, lastName, PASSWORD, email) VALUES (?, ?, ?, ?);"
  
  sql = mysql.format(sql, [req.body.firstName, req.body.lastName, req.body.password, req.body.email])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json({ newId: results.insertId });
  })
}

const listTemplates = (req, res) => {
  pool.query('SELECT * FROM Templates', (err, rows) => {
    if (err) {
      console.log({ 'message': 'Error occurred: ' + err })
      return handleSQLError(res, err)
    }
    res.json(rows)
  });
}

const getTemplateById = (req, res) => {

  let sql = `SELECT * FROM Templates JOIN usersAddress, usersContact WHERE users.id = usersAddress.user_id AND users.id = usersContact.user_id AND users.id = ?;`
  
  sql = mysql.format(sql, [req.params.id])

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const updateTemplateById = (req, res) => {

  let sql = "UPDATE Templates SET firstName = ?, lastName = ? WHERE id = ?;"
  
  sql = mysql.format(sql, [req.body.firstName, req.body.lastName, req.params.id])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })
}

const deleteTemplateByFirstName = (req, res) => {

  let sql = "DELETE from Templates where firstName = ?"
  
  sql = mysql.format(sql, [req.params.firstName])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json({ message: `Deleted ${results.affectedRows} user(s)` });
  })
}

const deleteTemplateByID = (req, res) => {

  let sql = "DELETE from Templates where id = ?"

  sql = mysql.format(sql, [req.params.id])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json({ message: `Deleted ${results.affectedRows} user(s)` });
  })
}

module.exports = { 
  createTemplate, 
  listTemplates, 
  getTemplateById, 
  updateTemplateById, 
  deleteTemplateByFirstName,
  deleteTemplateByID 
}


