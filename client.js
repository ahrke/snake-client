const net = require('net');

const connect = () => {
  let conn = net.createConnection({
    host: ,
    port: 50345
  })

  conn.setEncoding('utf8');

  conn.on('connect', ()=> {
    console.log(`connected to server...`);
    conn.write(`Name: ARK`)
  })

  conn.on("data", (data) => {
    console.log(`server says: ${data}`)
  })

  conn.write()

  return conn;
}

module.exports = connect;