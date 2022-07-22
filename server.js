

const express = require('express')
require('./Config/config')
const { profiledb, sociallinks } = require('./Config/Databasemodal')
const cors = require('cors')
const bcrypt = require('bcrypt');
const app = express();
app.use(express.json())
app.use(cors())
var jwt = require('jsonwebtoken');
const { connect } = require('mongoose');
var jwtKey = "jwttoken"
const multer = require('multer');



try {
    app.get('/data/:_id', async (req, res) => {
        let existdata = await profiledb.findOne(req.params)
        if (existdata) {
            res.send(existdata)
        }
        else {
            res.send("Data not found")
        }
    })
} catch (error) {
    res.send(error)
}

try {
    app.post("/create", async (req, res) => {
        let e = req.body.email;
        let uname = req.body.username;
        let p = req.body.password;
        let fname = req.body.name;
        var pass;

        let existemail = await profiledb.findOne({ email: e })
        let existusername = await profiledb.findOne({ username: uname })
        if (existemail) {
            if (existemail.email == e) {
                res.end(JSON.stringify({ status: false, message: 'Email  already existsss' }));

            }
        }

        else if (existusername) {
            if (existusername.username == uname) {
                res.end(JSON.stringify({ status: false, message: 'username already existsss' }));
            }
        }
        else {
            let data = new profiledb(req.body)
            const saltround = 10
            console.log("pass before func : ", pass)
            bcrypt.genSalt(saltround, (err, salt) => {
                bcrypt.hash(p, salt, (err, hash) => {
                    profiledb.insertMany({ name: fname, email: e, password: hash, username: uname })
                });


            });
            // console.log("pass outside func : ", password1)

            res.end(JSON.stringify({ status: false, message: 'User Register Sucessfully' }));
        }
    })
} catch (error) {
    res.send(error)
}



try {
    app.post("/login", async (req, res, next) => {
        let e = req.body.email;
        let p = req.body.pass
        const salt = await bcrypt.genSalt(10)

        let data = await profiledb.findOne({ email: e })
        if (data) {
            console.log("p : ", p)
            console.log("data.password : ", data.password)
            var oldpass = await data.password
            console.log("debugger 1 ")
            jwt.sign({ data }, jwtKey, { expiresIn: "2h" }, (err, token) => {
                console.log("debugger 2 ")
                if (err) {
                    res.send("something went wrong");
                }
                console.log("debugger 3 ")
                bcrypt.compare(p, data.password, (err, resp) => {
                    if (resp === true) {
                        res.end(JSON.stringify({ status: true, message: 'Token Generated', token: token }));
                    }
                    else {
                        res.end(JSON.stringify({ status: false, message: 'Wrong Password' }));

                    }

                })


            })
            console.log("debugger 4 ")

            console.log("debugger 5 ")
            // res.end(JSON.stringify({ status: " ture", message: 'Password Match' }));
        }
        else {
            console.log("debugger 6 ")
            res.end(JSON.stringify({ status: false, message: 'User Not Found' }));
        }
    })
} catch (error) {
    console.log("debugger 7 ")
    res.end(JSON.stringify({ status: false, message: error }));
}


app.put('/update/:_id', async (req, res) => {

    let response = await profiledb.updateOne(
        req.params,
        {
            $set: req.body
        }
    )
    // res.end(JSON.stringify({ status: true, message: "Record Update sucessfully" }))
    console.log(response)
})









app.delete('/delete/:_id', verifytoken, async (req, res) => {
    let dataofu = await profiledb.deleteOne(req.params)
    let dataofs = await socialdb.deleteone(req.params)
    res.end(JSON.stringify({ status: true, message: "Record Delete sucessfully" }))
})

function verifytoken(req, res, next) {
    let token = req.headers['authorization'];
    if (token) {

        token = token.split(' ')[1];
        jwt.verify(token, jwtKey, (err, valid) => {
            if (err) {
                res.end(JSON.stringify({ status: false, message: 'Please Provide valid Token' }));
            }
            else {
                next();
            }
        })
    }
    else {
        res.status(404).send("Please provide authentication")
    }
}




app.post("/links", async (req, res) => {
    // const {name, value, userid}=req.body
    const data = await sociallinks(req.body)
    let result = await data.save();
    res.send(result)
})





app.put("/linksupdate", async (req, res) => {


    const { id, url } = req.body
    const exist = await sociallinks.findOneAndUpdate({ _id: id }, { value: url })
    res.send(exist)
})


app.delete("/dellink/:id", async (req, res) => {
    const { id } = req.params

    const exist = await sociallinks.findOneAndDelete({ _id: id })
    res.send(exist)

})




app.get("/links/:id", async (req, res) => {
    const  {id}  = req.params
    console.log(id.slice(0,24))
    const allSocial = await sociallinks.find({pid:id.slice(0,24)})
    res.send(allSocial)
})


app.listen(80, () => {
    console.log("server is runnng on port 80")
})

