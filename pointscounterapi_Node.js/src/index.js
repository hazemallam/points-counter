const express = require('express');
const cors = require('cors');
require('./db/mongoose');
// router
const contactRouter = require('./routes/contact')
const userRouter = require('./routes/user')
const discoverRouter = require('./routes/discover')
const rewardsRouter = require('./routes/rewards')
// 
const app = express();
app.use(cors());
port = process.env.PORT || 5007;
app.use(express.json())
// use router
app.use(contactRouter)
app.use(userRouter)
app.use(discoverRouter)
app.use(rewardsRouter)
//
app.listen(port, ()=> console.log(`server run on port ${port}`)) 