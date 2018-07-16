// const MongoClient = require('mongodb').MongoClient
const { MongoClient, ObjectID } = require('mongodb') // is the same as line above

// var obj = new ObjectID()
// console.log(obj)

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to mongodb server')
  }
  console.log('Connected to mongodb server')
  const db = client.db('TodoApp')

  // db.collection('Todos').find({
  //   _id: new ObjectID('5b4c92c8d716fec908ac0fdc')
  // }).toArray().then((res) => {
  //   console.log('List of todos')
  //   console.log(JSON.stringify(res, undefined, 2))
  // }, (err) => {
  //   console.log('Unable to find todos', err)
  // })

  // db.collection('Todos').find().count().then((res) => { // in this case the res returns only a number from the count function
  //   console.log(`Number of todos: ${res}`)
  // }, (err) => {
  //   console.log('Unable to find todos', err)
  // })

  db.collection('Users').find({name: 'Matt'}).toArray().then((res) => {
    console.log('Users named Matt')
    console.log(res)
  }, (err) => {
    console.log('Unable to find users with name Matt', err)
  })

  client.close()
})
