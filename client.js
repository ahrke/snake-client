const net = require('net');
const { IP, PORT, INITIALS } = require('./constants');

const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');

const connect = () => {
  let conn = net.createConnection({
    host: IP,
    port: PORT
  })

  conn.setEncoding('utf8');
  
  conn.on('connect', () => {
    console.log(`connected to server...`);
    conn.write(`Name: ${INITIALS}`);    
  })
  
  conn.on("data", (data) => {
    console.log(`server says: ${data}`)
  })
  
  return conn;
}

module.exports = {
  connect
} 
