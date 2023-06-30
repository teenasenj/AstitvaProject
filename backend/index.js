const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 5000;

const db = require('./queries');

app.use(bodyParser.json());
app.use(cors({
  origin: '*'
}));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' });
});





app.post('/signup', db.createchemist_signup);
app.get('/signup/:id', db.getUsersChemist_id);
app.get('/signup', db.getUsersChemist);

app.post('/login', db.createlogin);
app.get('/login', db.getLoginUsers);
app.get('/login/:id', db.getLoginUsers_id);

app.post('/adding_operator', db.createadding_operator);
app.get('/adding_operator/:id', db.getoperator_id);
app.get('/adding_operator', db.getoperator);




// app.put('/users/:id', db.updateUser);
// app.delete('/users/:id', db.deleteUser);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});




// app.get('/login', db.getUsers);
// app.post('/login', db.loginget);
// app.get('/login', db.login);


// app.get('/signup', db.chemist_signup);