let conn;

const setupInput = function(connection) {
  conn = connection;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
}

const handleUserInput = (c) => {
    switch (true) {
      case c === "w" || '\u0038':
        console.log("up");
        conn.write('Move: up');
        break;
      case c === "d" || '\u0039':
        console.log("right");
        conn.write('Move: right');
        break;
      case c === "s" || '\u0040':
        console.log("down");
        conn.write('Move: down');
        break;
      case c === "a" || '\u0037':
        console.log("left");
        conn.write('Move: left');
        break;
      case c === "f":
        console.log("my apple!");
        conn.write('Say: My apple!');
        break;
      case c === "e":
        console.log("head shot!");
        conn.write('Say: headshot');
        break;
      case c === "r":
        console.log("cant touch this");
        conn.write('Say: cant touch this');
        break;
        case c === '\u0003':
        process.exit(0);
        break;
    }
}

module.exports = {
  setupInput
}