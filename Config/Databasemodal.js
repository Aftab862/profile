const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
    name: String,
    job: String,
    location: String,
    email: String,
    city: String,
    phone: Number,
    coverUrl: String,
    directMode: Boolean,
    dob: String,
    profileOn: Number,
    profileUrl: String,
    tagUid: String,
    username: String,
    password: String

});


const socialSchema = mongoose.Schema({
    name: String,
    value: String,
    pid: String,
    imgUrl: String

})


const sociallinks = mongoose.model("sociallinks", socialSchema)
const profiledb = mongoose.model("profiles", profileSchema);


module.exports = { profiledb, sociallinks }