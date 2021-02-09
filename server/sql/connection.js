require('dotenv').config()
const mysql = require('mysql')
// !You MUST create a .env file with these values in it.

class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating mysql connection...')
      
      const config = {
        connectionLimit: 100,
        host: "34.66.3.218",
        user: "root",
        password: "C*pper08",
        database: "main"
      }

    //   if (process.env.NODE_ENV === 'production' && process.env.CLOUD_INSTANCE) {
    //     console.log(`connect socket: ${process.env.CLOUD_INSTANCE}`)
    //     config.socketPath = `/cloudsql/${process.env.CLOUD_INSTANCE}`  
    //   }

      this.pool = mysql.createPool(config)

      return this.pool
    }

    return this.pool
  }
}

const pool = new Connection()

module.exports = pool;
