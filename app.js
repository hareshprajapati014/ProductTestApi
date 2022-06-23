
const express = require('express');
const app = express();


const client = require('./connection.js')
const bodyParser = require('body-parser');
app.use(bodyParser.json());



app.listen(3000, () => {
    console.log("server is port number 3000!");
})

client.connect();

app.get('https://fakestoreapi.com/products', (req, res) => {
    client.query('select * from produuct', (error, result) => {
        if (!error) {
            res.send(result.rows);

        }
    });
    client.end;
})

// app.get('/productdata/:productid', (req, res) => {

//     client.query(`Select * from productdata where productid=${req.params.productid}`, (err, result) => {
//         if (!err) {
//             res.send(result.rows);
//         }
//     });
//     client.end;
// })

