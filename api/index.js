const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.post('/register',(req,res)=>{
    res.json('test ok');
    const {username, password}=req.body;
    res.json({requestData:{username, password}})

    res.status(200).json({ message: 'User registered successfully!', user: { username } });
   
})

app.listen(4400, () => {
    console.log('Server running on port 4400');
});