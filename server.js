const express = require('express');

const app = express();

app.get('/api/users',(req,res)=>{

    const users = [
        {id: 1, firstName: 'Wahed', lastName: 'farhad'},
        {id: 2, firstName: 'lary', lastName: 'elison'},
        {id: 3, firstName: 'harley', lastName: 'davidson'}
    ];

    res.json(users);
});

app.listen(7000,() => console.log(`server started on port 7000`));