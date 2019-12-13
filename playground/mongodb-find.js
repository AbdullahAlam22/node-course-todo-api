//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
    if(err){
        console.log('Unable to connect MongoDB server.');
    } else {
        console.log('Connected to MongoDB server.');
    }

    db.collection('todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch the data', err);
    });
    
    //db.close();
});