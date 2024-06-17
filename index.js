import express from "express";
import bodyParser from "body-parser";
import Cryptr from "cryptr";



const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",(req,res)=>{
res.render("index.ejs");
});

app.post("/decrypt",(req,res)=>{
const txtstring = req.body.word;
const cryptr = new Cryptr('myTotallySecretKey');
const enctxtstring = cryptr.encrypt(txtstring);
res.render("index.ejs",{enc:enctxtstring});


});



app.listen(3000,()=>{
console.log("Server is running");
});