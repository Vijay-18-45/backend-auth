const express = require('express')
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser')
const helmet = require('helmet')
const mongoose = require('mongoose')
const authRouter = require('./routers/authRouter')
app.use(helmet())
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


 




const allowedOrigins = [
  "http://localhost:3000",
  "http://127.0.0.1:3000", 
  "https://autho-authen.vercel.app" 
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));



mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Database connected")
}).catch((err)=>{
    console.log(err)

})




app.use('/api/auth',authRouter)

app.get('/',(req,res)=>{

     res.json({message:"Hello from the server"})

})
app.listen(process.env.PORT,()=>{

     console.log("listening on port 8000")

})
