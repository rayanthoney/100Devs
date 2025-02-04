const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let menuSchema = new Schema({
    name: {type:String, require: true},
    icon: {type:String, require: true},
    menuUrl: {type:String, require: true},
    entryDate: {type:Date, default:Date.now.apply}
})

let usersSchema = new Schema({
    email: {type:String, require:true},
    pwd: {type:String, require:true},
    entryDate: {type:Date, default:Date.now.apply}
})

let menu = mongoose.model('menu', menuSchema, 'menu')
let users = mongoose.model('users', usersSchema, 'users')
let mySchemas = {'menu':menu,'users':users}

module.exports = mySchemas