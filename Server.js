//make basic server

const http = require(`http`);

http
  .createServer((req, res) => {
    res.write("iam   ");
    res.end();
  })

  .listen(1200);
