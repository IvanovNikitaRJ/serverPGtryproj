const express = require('express');
const userRouter = require('../routes/user.routes.js');

const PORT = process.env.PORT || 8080;

const app = express();

app.use('/app', userRouter);

app.listen(PORT, () => console.log(`server started on port ${PORT}`));