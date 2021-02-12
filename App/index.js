const express = require('express');
const request = require('request');

const app = express();

app.get('/weather',(req,res)=>{
    request("http://api.weatherstack.com/current?access_key=64b3d82c00c3735b1d1fd40e3e827398&query=bangladesh",function(error,response,body){
        if(!error && response.statusCode==200){
            const parse = JSON.parse(body);
            const temperature = parse["current"]["temperature"];
            res.send({temperature});
        }
    });
});

app.listen(5000,()=>console.log('starting'));