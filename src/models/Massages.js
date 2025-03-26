const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    massage:{
        type: String,
        required: true
    },
})

export default mongoose.models.Massages || mongoose.model("Massages", Schema)