const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: {type:String, 
        required:true, 
        unique:true,
        match: /.+@(gmail|yahoo|hotmail|outlook)\.com$/
    },
    password: {type:String, required: true,type:String, required: true}

})

module.exports = mongoose.model('User', userSchema);