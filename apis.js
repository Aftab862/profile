// // const express = require('express');
// // const app= express();
// // app.use(express.json());
// // const mongoose= require('mongoose')


// // app.get('/',(req,res)=>{
// //     res.send("<h1>Hello world</h1>")
// // })

// // app.listen(8000,()=>{
// //     console.log("server is rinnng on port 8000")
// // })




// // const main = async () => {

// //     await mongoose.connect('mongodb://localhost:27017/ProfileData')
// //     const profileSchema = ({
// //         name:String,
// //         job:String,
// //         city:String,
// //         phone:Number
// //     });
// //     const Profilemodal = mongoose.model("UserProfile",profileSchema)

// //     let data = new Profilemodal({
// //         name: "Aftab-Ahmad",
// //         job:"student",
// //         city:"lahore",
// //         phone:1234,
// //     })
// //     let result = await data.save()
// //     console.log(result)
// // }
// // main()



// //       if(existdata.name==n && existdata.job==j)
// //       {
// //         console.log("match found");
// //          res.send("Match found")
// //     //     console.log(existname)
// //       }





// --------------------------------------------------



// const express = require('express')
// require('./Config/config')
// const { profiledb, socialdb } = require('./Config/Databasemodal')
// const cors = require('cors')
// const bcrypt = require('bcrypt');
// const app = express();
// app.use(express.json())
// app.use(cors())
// var jwt = require('jsonwebtoken');
// var jwtKey = "jwttoken"




// try {
//     app.get('/data/:_id', async (req, res) => {
//         let existdata = await profiledb.findOne(req.params)
//         if (existdata) {
//             res.send(existdata)
//         }
//         else {
//             res.send("Data not found")
//         }
//     })
// } catch (error) {
//     res.send(error)
// }

// try {
//     app.post("/create", async (req, res) => {
//         let e = req.body.email;
//         let uname = req.body.username;
//         let p = req.body.password;
//         let fname = req.body.name;
//         console.log(e, uname, fname, p)
//         // res.send(req.body)
//         let existemail = await profiledb.findOne({ email: e })
//         let existusername = await profiledb.findOne({ username: uname })
//         if (existemail) {
//             if (existemail.email == e) {
//                 res.end(JSON.stringify({ status: false, message: 'Email  already existsss' }));
//                 // console.log(existemail)
//             }
//         }

//         else if (existusername) {
//             if (existusername.username == uname) {
//                 res.end(JSON.stringify({ status: false, message: 'username already existsss' }));
//             }
//         }
//         else {
//             let data = new profiledb(req.body)
//             const salt = await bcrypt.genSalt(10)
//             const hashpassword = await bcrypt.hash(p, salt)
//             pass = hashpassword
//             let result = await profiledb.insertMany({ name: fname, email: e, password: pass, username: uname })
//             res.end(JSON.stringify({ status: false, message: 'User Register Sucessfully' }));
//         }
//     })
// } catch (error) {
//     res.send(error)
// }

// try {
//     app.post("/login", async (req, res, next) => {
//         let e = req.body.email;
//         let p = req.body.pass
//         let existdata = await profiledb.findOne({ email: e })
//         if (existdata) {
//             jwt.sign({ existdata }, jwtKey, { expiresIn: "2h" }, (err, token) => {
//                 if (err) {
//                     res.send("something went wrong");
//                 }
//                 res.send({ existdata, token: token })
//             })


//         }
//         res.end(JSON.stringify({ status: false, message: 'User Not Found' }));
//     })
// } catch (error) {
// }
// app.put('/update/:_id', async (req, res) => {
//     const addsocial = async (uid, uname, uvalue) => {
//         let exist = await socialdb.findOne({ userid: uid })
//         if (exist) {
//             let resutl = await socialdb.updateMany({ name: uname, value: uvalue })
//             res.end(JSON.stringify({ status: true, message: "data Update sucessfully" }))

//         }
//         else {
//             let data = await socialdb.insertMany({ userid: uid, name: uname, value: uvalue })
//             res.end(JSON.stringify({ status: true, message: "data save sucessfully" }))
//         }
//     }

//     const { Links } = req.body
//     let s = await socialdb.findById(req.params)
//     let v = await profiledb.findById(req.params)
//     if (req.body) {
//         if (Links) {
//             if (v.id) {

//                 addsocial(v.id, Links.name, Links.value)

//             }
//         }

//         let data = await profiledb.updateOne(

//             req.params,
//             {
//                 $set: req.body
//             }
//         )

//     }
// }

// )

// app.delete('/delete/:_id', verifytoken, async (req, res) => {
//     let dataofu = await profiledb.deleteOne(req.params)
//     let dataofs = await socialdb.deleteone(req.params)
//     res.end(JSON.stringify({ status: true, message: "Record Delete sucessfully" }))
// })

// function verifytoken(req, res, next) {
//     let token = req.headers['authorization'];
//     if (token) {

//         token = token.split(' ')[1];
//         jwt.verify(token, jwtKey, (err, valid) => {
//             if (err) {
//                 res.end(JSON.stringify({ status: false, message: 'Please Provide valid Token' }));
//             }
//             else {
//                 next();
//             }
//         })
//     }
//     else {
//         res.status(404).send("Please provide authentication")
//     }


// }







// app.listen(8000, () => {
//     console.log("server is runnng on port 8000")
// })




//     res.send(existdata)
//  res.send(existdata.password)
//   const passwordmatch=  await bcrypt.compare(p,existdata.password)
//   res.send(passwordmatch)




require('./Config/config')
const { sociallinks, profiledb } = require('./Config/Databasemodal')
var express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
var app = express();
const dotenv = require('dotenv')
var PORT = process.env.PORT;
dotenv.config({path:"./config.env"})

// enable CORS
// app.use(function(req, res, next) {
//    res.header("Access-Control-Allow-Origin", "*"); 
//    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//    next(); 
//  });


app.use(cors())
// parse application/json
// app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));

// // serving static files
// app.use('/uploads', express.static('uploads'));

// // request handlers
// app.get('/', (req, res) => {
//    res.send('Node js file upload rest apis');
// });

// // handle storage using multer
// var storage = multer.diskStorage({
//    destination: function (req, file, cb) {
//       cb(null, 'uploads');
//    },
//    filename: function (req, file, cb) {
//       cb(null, file.originalname);
//    }
// });
// var upload = multer({ storage: storage });


// app.post('/upload-file', upload.single('dataFile'), async (req, res, next) => {
//    const imgUrl = req.file.path;
//    const { name, value, pid } = req.body
//    if (imgUrl) {
//       console.log("imgpath", imgUrl, "Pid", pid, name)
//       // res.send({ message: 'File uploaded successfully.', imgUrl });
//       const result = await sociallinks.insertMany({ name: name, value: value, imgUrl: imgUrl, pid: pid });
//       if (result)
//          res.end(JSON.stringify({ status: true, message: result }));
//    }
// });

// app.put('/updatelinks/:linkid', async (req, res) => {
//    const { linkid } = req.params
//    const { value } = req.body

//    const result = await sociallinks.findByIdAndUpdate({ _id: linkid }, {
//       value: value
//    })
//    if (result) {
//       res.end(JSON.stringify({ status: true, message: 'Link save sucessfully' }));
//    }
// })

// app.delete("/deletelink/:id", async (req, res) => {
//    const result = await sociallinks.findOneAndDelete(req.params)
//    if (result) {
//       res.end(JSON.stringify({ status: true, message: 'Link deleted' }));
//    }
//    else {
//       res.end(JSON.stringify({ status: false, message: 'Error' }));

//    }
// })

app.get("/links/:id", async (req, res) => {
   const { id } = req.params
   // console.log(id.slice(0, 24))
   const allSocial = await sociallinks?.find({ pid: id.slice(0, 24) })
   res.send(allSocial)
})

app.get("/profile/:id", async (req, res) => {
   const { id } = req.params
   const profile = await profiledb.findById({ _id: id })
   res.send(profile)
 
})


app.listen(PORT, () => {
   console.log(` Server started on port: ${PORT}`);
});