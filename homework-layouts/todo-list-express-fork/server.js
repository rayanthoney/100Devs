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
const MongoClient = require('mongodb').MongoClient
const PORT = 2121
require('dotenv').config()


// CONNECT TO MONGODB
let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'todo'

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
    })
    
// MIDDLEWARE SET THE TEMPLATE ENGINE (USING EJS)
app.set('view engine', 'ejs')
// STORE STATIC FILES FOLDER
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


// GET METHOD
app.get('/',async (request, response)=>{
    const todoItems = await db.collection('todos').find().toArray()
    const itemsLeft = await db.collection('todos').countDocuments({completed: false})
    response.render('index.ejs', { items: todoItems, left: itemsLeft })
    // db.collection('todos').find().toArray()
    // .then(data => {
    //     db.collection('todos').countDocuments({completed: false})
    //     .then(itemsLeft => {
    //         response.render('index.ejs', { items: data, left: itemsLeft })
    //     })
    // })
    // .catch(error => console.error(error))
})

// POST METHOD
app.post('/addTodo', (request, response) => {
    db.collection('todos').insertOne({thing: request.body.todoItem, completed: false})
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