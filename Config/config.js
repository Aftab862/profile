const mongoose= require("mongoose")
mongoose.connect('mongodb://localhost:27017/ProfileData')


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
