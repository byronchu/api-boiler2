const mongoose = require('mongoose');
mongoose.Promise = global.Promise;   // fixes mongoose.Promise = global.Promise;
// Initialization
//mongoose.connect(process.env.MONGO_URL)
mongoose.connect('mongodb://localhost:27017/proj3');
const { connection: db } = mongoose;
// Same as: const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
/*db.on('error', (error) => {
    console.error('connection error: ', error);
});*/
db.once('open', () => {
    console.log('Connected to the database.');
});

module.exports = db;
