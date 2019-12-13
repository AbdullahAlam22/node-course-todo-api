const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
    if(err){
        console.log('Unable to connect MongoDB server.');
    } else {
        console.log('Connected to MongoDB server.');
    }

    

    db.collection('users').insertOne({
        name: 'Yusef Abdullah',
        age: 23,
        location: 'dhaka'
    }, (err, result) => {
        if (err) {
            console.log('Unable to insert the user data');
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.close();
})