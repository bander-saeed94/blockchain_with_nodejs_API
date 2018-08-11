const express = require('express');
const app = express();


app.use(express.json())

app.get('/blocks/:blockHeight',(req,res,next)=>{
    let blockHieght = req.params.blockHeight
    res.json({block:`you requested block ${blockHieght}`})
})

app.post('/blocks', (req,res,next)=>{
    let body = req.body;
    res.json({body,saved : true})
})

app.listen(8000,()=>{
    console.log('listening on port 8000')
})

