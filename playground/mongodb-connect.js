// const MongoClient = require('mongodb').MongoClient
const { MongoClient, ObjectID } = require('mongodb') // is the same as line above

var obj = new ObjectID()
console.log(obj)

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to mongodb server')
  }
  console.log('Connected to mongodb server')
  const db = client.db('TodoApp')

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err)
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2))
  // })

  db.collection('Users').insertOne({
    name: 'Matt',
    age: 25,
    location: 'California'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert user', err)
    }
    console.log(result.ops)
  })

  client.close()
})
