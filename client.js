const net = require('net');

const connect = () => {
  let conn = net.createConnection({
    host: '172.46.0.110',
    port: 50541
  })

  conn.setEncoding('utf8');
  
  conn.on('connect', () => {
    console.log(`connected to server...`);
    conn.write(`Name: ARK`);
    for(let i = 0; i < 6; i++) {
      setTimeout(() => {
        conn.write('Move: up');
      }, i * 500)
    }
    // conn.write('Move: right');
    // conn.write('Move: up');

    // stdin.on('data', (c) => {
    //   switch (c) {
    //       case '\u0038':
    //       console.log("up");
    //       conn.write('Move: up');
    //       break;
    //     case '\u0039':
    //       console.log("right");
    //       conn.write('Move: right');
    //       break;
    //     case '\u0040':
    //       console.log("down");
    //       conn.write('Move: down');
    //       break;
    //     case '\u0037':
    //       console.log("left");
    //       conn.write('Move: left');
    //       break;
    //     case '\u0003':
    //       process.exit(0);
    //       break;
    //   }
    // });
    
  })
  
  conn.on("data", (data) => {
    console.log(`server says: ${data}`)
  })
  
  return conn;
}

module.exports = {
  connect
} 
