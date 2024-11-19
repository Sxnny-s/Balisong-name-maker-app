const express = require('express')
const { MongoClient, ObjectId } = require('mongodb')
const path = require('path')


const app = express()
const port = 3001;

const url = 'mongodb+srv://demo:demo@cluster0.qrvad.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const dbName = 'balisongsDB'
app.use(express.static('public'))

let db
let collection



app.set('view engine', 'ejs')
// app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
.then(client => {
    db = client.db(dbName);
    collection = db.collection('balisong');
    console.log('Connected to database')
})
.catch(err => console.error(err));



app.listen(port, () => {
    console.log(`Server is running on http://localhost${port}`)
})



app.get('/', (req, res) => {
    collection.find().toArray()
    .then(result => {
        res.render('index.ejs', {balisong: result});
    })
    .catch(err => {
        console.error(err);
        res.send('Error fetching balisong data')
        })
})

app.post('/balisong', (req, res) => {
    const model = req.body.model;
    const company = req.body.company

    
    collection.insertOne({ model, company, likes: 0 })
        .then(result => {
            console.log('balisong added:', result);
            res.redirect('/');  
        })
        .catch(err => {
            console.error(err);
            res.send('Error inserting balisong');
        });
});

app.put('/increment-like/:id', (req, res) => {
    const balisongId = req.params.id;

    collection.updateOne(
        { _id: new ObjectId(balisongId) },
        { $inc: { likes: 1 } }
    )
    .then(result => {
        if (result.modifiedCount > 0) {
           
            res.status(200).send('Like incremented');
        } else {
            res.status(404).send('balisong not found');
        }
    })
    .catch(err => {
        console.error(err);
        res.status(500).send('Error incrementing like');
    });
});


app.delete('/delete-balisong/:id', (req, res) => {
    const balisongId = req.params.id
    collection.deleteOne({_id: new ObjectId(balisongId)})
    .then(result => {
           res.redirect('/')
    })
    .catch(err => {
        console.error(err);
        res.status(500).send('Error deleting balisong');
    });
})