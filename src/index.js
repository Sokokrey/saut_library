const express      = require('express');
const app          = express();
const cors         = require('cors');
const routes       = require('./routes');

//settings
app.set('port', process.env.PORT || 3000);

//middlewares 
app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' }));

//routes
app.use(routes);

//start server
app.listen(app.get('port'), (req, res) => { 
    console.log('Servidor en puerto '+app.get('port'));
});