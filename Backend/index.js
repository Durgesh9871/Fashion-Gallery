
const express=require("express")
require("dotenv").config()
port=process.env.port
const {connection}=require("./configs/db")

const {router}=require("./Router/Products")

app=express()

app.use(express.json())
app.use('/products',router)
app.get('/' , (req , res)=>{

   res.send('hello from simple server :)')

})

app.listen(port,async()=>{
    try{
        await connection
        console.log("connected to db")
    }
    catch(err){
        console.log(err)
    }
    console.log("listening at port",port)
}) 

const express = require("express");
require("dotenv").config();
const { connection } = require("./config/db");
const { userRouter } = require("./routes/User.route");
const {ProductsRoute}=require('./routes/productRoute');
const {OrderRouter}=require('./routes/Order');
const {Cartrouter}=require('./routes/Cart');
const {authenticate}=require('./middlewares/Auth.middleware')

const cors = require("cors");
const app = express();

// middlewares:-
app.use(cors());
app.use(express.json());


app.use("/users", userRouter);
app.use('/products',ProductsRoute);
app.use(authenticate);
app.use('/orders',OrderRouter);
app.use('/carts',Cartrouter);

//connect to the server:-
app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected to DB");
  } catch (err) {
    console.log(`Cannot connect to DB: ${err}`);
  }
  console.log(`Server is running on http://localhost:${process.env.port}`);
});

