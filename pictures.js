// const express = require('express');
// const app = express()
// const multer = require('multer')
// app.use(express.json())



// const upload = multer({
//     storage: multer.diskStorage({
//         destination: function (req, file, cb) {
//             cb(null, "/uploads")
//         },
//         filename: function (req, file, cb) {
//             cb(null, file.fieldname + "-" + Date.now() + ".png")
//         }
//     })
// }).single("profile")

// app.post('/upload', upload, (req, res) => {
//     res.send(req.body)
// })



// app.listen(8000)






// const path = require("path");
// const express = require("express");
// const multer = require("multer");
// const cors = require("cors");

// const app = express();

// // This middleware is used to enable Cross Origin Resource Sharing This sets Headers to allow access to our client application
// app.use(cors());

// // Storage Engin That Tells/Configures Multer for where (destination) and how (filename) to save/upload our files
// const fileStorageEngine = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "./image"); //important this is a direct path fron our current file to storage location
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "--" + file.originalname);
//   },
// });

// // Route To Load Index.html page to browser
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "index.html"));
// });

// // The Multer Middleware that is passed to routes that will receive income requests with file data (multipart/formdata)
// // You can create multiple middleware each with a different storage engine config so save different files in different locations on server
// const upload = multer({ storage: fileStorageEngine });
// // Single File Route Handler

// app.post("/upload", upload.single("p"), (req, res) => {
//   console.log(req.file);
//   res.send("Single FIle pload success");
// });

// // Multiple Files Route Handler
// app.post("/multiple", upload.array("p", 3), (req, res) => {
//   console.log(req.files);
//   res.send("Multiple Files Upload Success");
// });

// app.listen(8000);


















// const express = require('express');

// const bodyParser = require('body-parser');

// const app = express();

// const multer = require('multer');

//  app.use(bodyParser.urlencoded({ extended: false }))

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded());
// in latest body-parser use like below.
//app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
// app.use(bodyParser.json())
/*------------------------------------------

--------------------------------------------

parse application/json

--------------------------------------------

--------------------------------------------*/

// app.use(bodyParser.urlencoded({extended:true}));
// app.use( bodyParser.json() );


/*------------------------------------------

--------------------------------------------

image upload code using multer

--------------------------------------------

--------------------------------------------*/

// var storage = multer.diskStorage({

//     destination: function (req, file, cb) {

//         cb(null, '/uploads');

//     },

//     filename: function (req, file, cb) {

//         cb(null, Date.now() + '-' + file.originalname);

//     }

// });

// var upload = multer({ storage: storage });



/**

 * Create New Item

 *



 */

// app.post('/upload',upload.none(), (req, res) => {
//     // const image = req.file;
//     console.log(req.body)
//     res.send(req.body);

// });


/**

 * API Response

 *
 */




/*------------------------------------------

--------------------------------------------

Server listening

--------------------------------------------

--------------------------------------------*/
const express = require('express')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const app = express()


app.post('/profile', upload.single('image'), function (req, res, next) {
  // req.file is the `avatar` file
  res.send(req.file)
  console.log(req)
  console.log(req.body)
  // req.body will hold the text fields, if there were any
})

// app.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {
//   // req.files is array of `photos` files
//   // req.body will contain the text fields, if there were any
// })

// const cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
// app.post('/cool-profile', cpUpload, function (req, res, next) {
//   // req.files is an object (String -> Array) where fieldname is the key, and the value is array of files
//   //
//   // e.g.
//   //  req.files['avatar'][0] -> File
//   //  req.files['gallery'] -> Array
//   //
//   // req.body will contain the text fields, if there were any
// })









app.listen(3000, () => {

    console.log('Server started on port 3000...');

});