const express = require('express')
const app = express();

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
  
});


const port = process.env.PORT || 3000;

app.use('/assets', express.static('assets'))

app.use('/scripts', express.static(`${__dirname}/node_modules/`));

// Listen for HTTP requests on port 3000
app.listen(port, () => {
  console.log('listening on %d', port);
});