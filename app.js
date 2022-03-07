var express = require('express');
var app = express();
const port = 5000;

// Static Files
app.use(express.static('public'))
//app.use(express.static(path.join(__dirname, 'public')));

// Templating Engine
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(express.json());
// Parsing middleware
// Parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false })); // Deprecated
app.use(express.urlencoded({ extended: true })); // New


// Routes
const indexRouter = require('./src/routes/index.js');

app.use('/', indexRouter);
//app.use('/article', newsRouter);

// Listen on port 5000
app.listen(port, () => console.log(`Listening on port ${port}`));