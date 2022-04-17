const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const cors = require('cors');

const pool= require('./bd');


const pdfTemplate = require('./app/app');
// const pdfTemplate = require('./views/index.html');

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



app.get('/alltaches/projet/:id',(req,res)=>{
    let sql='select t.description_tache,p.nom_projet,t.nouveau_prix from projet p,tache t where p.id_projet=t.projet_id and p.id_projet='+req.params.id;
    pool.query(sql,(err,rows,fields)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(rows);
        }
    });
});


// app.post('/create-pdf', (req, res) => {
//     pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => {
//         if(err) {
//             res.send(Promise.reject());
//         }
//         res.send(Promise.resolve());
//     });
// });


// app.get('/fetch-pdf', (req, res) => {
//     res.sendFile(`${__dirname}/result.pdf`)
// })

pool.connect((err)=>{
    if(err) throw err;
    else console.log('connect sucess');
});

app.listen(port, ()=>console.log('my port is '+port))