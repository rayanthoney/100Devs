/*
    npm init
    ( CREATES PACKAGE.JSON )
    npm install
    ( NODE MODULES )
    npm install --save-dev nodemon
    "start": "nodemon server.js"
*/

/* PREP
    P = PARAMETERS - (ONCLICK TEXTBOX, TRASHCAN, ITEMS SUBMIT BUTTON)
    R = RETURN - (NEW ITEM COMES BACK)
    E = EXAMPLES - (RETURN MARKED AS COMPLETE, REMOVE ITEM FROM LIST, COUNTER DECRAMENTS, INCREMENT TO ZERO AS BASE)
    P = PSUEDOCODE - (
            USER FACING FRONT END
                TYPE A NEW ITEM 
                SUBMIT NEW ITEM
                   CLICK EVENT LISTENER
                   SEND DATA TO AN API (SERVER)
                   NEW ITEM CREATED (DATABASE ENTRY)
                CLICK ON TRASHCAN (DELETE REQUEST)
                    CLICK EVENT LISTENER
                    SEND DATA WITH INFO TO SERVER
                CLICK ON AN ITEM 
                    CLICK EVENT LISTENER
                    UPDATE "PUT" FLAG CHANGE
            MONGODB BACKEND
                STORE DATA

    ) 
*/
/* CRUD 
    C = CREATE 
    R = READ 
    U = UPDATE
    D = DELETE
*/

// DECLARE VARIBLES
const express = require('express') // DECLARATION OF THE USE OF EXPRESS  
const app = express() // SETTING AND ASSIGNING EXPRESS AS A VARIABLE
const MongoClient = require('mongodb').MongoClient // DECLARATION OF THE USE OF MONGODB 
const PORT = 2121 // ASSIGNING THE PORT TO USE LOCALLY
require('dotenv').config() // ASSIGNING A A FILE (.env) WHERE PRIVATE VARIABLES CAN BE ASSIGNED 


// CONNECT TO MONGODB
let db, // DECLARING A VARIABLE (db) SO A VALUE CAN BE ASSIGNED TO IT
    dbConnectionStr = process.env.DB_STRING, // DECLARING A VARIABLE AND ASSIGNING A DATABASE CONNECTION STRING
    dbName = 'todo' // DECLARING A VARIABLE AND ASSIGNING A NAME OF THE DATABASE BEING USED

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true }) // CREATING A CONNECTION TO MOGODB, AND PASSING IN OUR CONNECTIOIN STRING AND IT'S PROPERTY
    .then(client => { // WAITS FOR THE CONNECTION. PROCEDDING IF SUCCESFUL, AND POSTING ALL CLIENT INFO
        console.log(`Connected to ${dbName} Database`) // LOG TO CONSOLE A TEMPLATE LITERAL USING THE VARIABLE "dbName" 
        db = client.db(dbName) // ASSIGNING A VALUE TO PREVIOUSLYDECLARED db VARIABLE THAT CONTAINS A db CLIENT FACTORY METHOD
    }) // CLOSING THEN 
    
// MIDDLEWARE SET THE TEMPLATE ENGINE (USING EJS)
app.set('view engine', 'ejs') // SETTING ejs AS THE DEFAULT VIEW ENGINE 

// STORE STATIC FILES FOLDER
app.use(express.static('public')) // LOCATION FOR STATIC ASSETS FOLDER
app.use(express.urlencoded({ extended: true })) // TELLS EXPRESS TO DECODE AND ENCODE URLs WHERE THE HEADER MATCHES THE CONTENT.
app.use(express.json()) // PARSES INCOMING CONTENT FROM INCOMING REQUESTS


// GET METHOD
app.get('/',async (request, response)=>{ // STARTS A get METHOD WHEN THE ROUTE IS PASSED IN, SETS UP REQUEST, AND RESPONSE PARAMETERS
    const todoItems = await db.collection('todos').find().toArray() // SETS A VARIABLE AND AWAITS  ALL ITEMS FROM THE todos COLLECTION
    const itemsLeft = await db.collection('todos').countDocuments({completed: false}) // SETS A VARIABLE AND AWAITS A COUNT OF UNCOMPLETED ITEMS TO LATER DISPLAY IN EJS
    response.render('index.ejs', { items: todoItems, left: itemsLeft }) // RENDERS EJS FILES AND PASSING THRU THE db ITEMS AND THE COUNT REMAINING INSIDE OF AN OBJECT
    // db.collection('todos').find().toArray()
    // .then(data => {
    //     db.collection('todos').countDocuments({completed: false})
    //     .then(itemsLeft => {
    //         response.render('index.ejs', { items: data, left: itemsLeft })
    //     })
    // })
    // .catch(error => console.error(error))
}) // CLOSES THE GET METHOD

// POST METHOD
app.post('/addTodo', (request, response) => { // STARTS A POST METHOD WHEN THE ADD ROUTE IS PASSED 
    db.collection('todos').insertOne({thing: request.body.todoItem, completed: false}) // INSERTS AN ITEM INTO todos COLLECTION
    .then(result => {
        console.log('Todo Added')
        response.redirect('/')
    })
    .catch(error => console.error(error))
})

// PUT METHOD
app.put('/markComplete', (request, response) => {
    db.collection('todos').updateOne({thing: request.body.itemFromJS},{
        $set: {
            completed: true
          }
    },{
        sort: {_id: -1},
        upsert: false
    })
    .then(result => {
        console.log('Marked Complete')
        response.json('Marked Complete')
    })
    .catch(error => console.error(error))

})

app.put('/markUnComplete', (request, response) => {
    db.collection('todos').updateOne({thing: request.body.itemFromJS},{
        $set: {
            completed: false
          }
    },{
        sort: {_id: -1},
        upsert: false
    })
    .then(result => {
        console.log('Marked Complete')
        response.json('Marked Complete')
    })
    .catch(error => console.error(error))

})

// DELETE METHOD
app.delete('/deleteItem', (request, response) => {
    db.collection('todos').deleteOne({thing: request.body.itemFromJS})
    .then(result => {
        console.log('Todo Deleted')
        response.json('Todo Deleted')
    })
    .catch(error => console.error(error))

})

// START SERVER LISTENING ON PORT 2121
app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server running on port ${PORT} You Betta go and catch it!`)
})