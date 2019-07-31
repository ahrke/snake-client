const { connect } = require('./client');

console.log("connecting...");
connect();

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
}

const handleUserInput = (c) => {
    switch (c) {
      //   case '\u0038':
      //   console.log("up");
      //   conn.write('Move: up');
      //   break;
      // case '\u0039':
      //   console.log("right");
      //   conn.write('Move: right');
      //   break;
      // case '\u0040':
      //   console.log("down");
      //   conn.write('Move: down');
      //   break;
      // case '\u0037':
      //   console.log("left");
      //   conn.write('Move: left');
      //   break;
      case '\u0003':
        process.exit(0);
        break;
    }
}