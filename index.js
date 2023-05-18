const express = require('express');
const userRouter = require('../routes/user.routes');

const PORT = process.env.PORT || 8080;

const app = express();

app.get('/', (req,res) => {
    res.send('server_app');
});

app.listen(PORT, () => console.log(`server started on port ${PORT}`));