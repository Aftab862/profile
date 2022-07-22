const mongoose= require("mongoose")
const dotenv = require('dotenv')
dotenv.config({path: "./config.env" })



const db= process.env.DATABASE 
mongoose.connect(db, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false
 }).then(() => {
    console.log("Connection Sucessfull")
 }).catch((err) => {
    console.log(err)
 })
 



















// mongoose.connect('mongodb://localhost:27017/ProfileData')








// const mongoose = require('mongoose');

// const main = async () => {

//     await mongoose.connect('mongodb://localhost:27017/ProfileData')
//     const profileSchema = ({
//         name: String
//     })
//     const Profilemodal = mongoose.model("UserProfile", profileSchema)
 
//     let data = new Profilemodal({
//         name: "Aftab-Ahmad"
//     })
//     let result = data.save()
//     console.log(result)

// }

// main()
