// const MongoClient = require('mongodb').MongoClient
const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to mongodb server')
  }
  console.log('Connected to mongodb server')
  const db = client.db('TodoApp')

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((res) => {
  //   console.log(res) // res.result.n shows number of items deleted
  // }, (err) => {
  //   console.log('Unable to delete todos with text eat lunch', err)
  // })

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((res) => {
  //   console.log(res.result.n)
  // }, (err) => {
  //   console.log('Unable to delete todos with text eat lunch', err)
  // })

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((res) => {
  //   console.log(res)
  // }, (err) => {
  //   console.log('Unable to delete todos with text eat lunch', err)
  // })

  // deleteMany Users
  // db.collection('Users').deleteMany({name: 'Matt'}).then((res) => {
  //   console.log(res.result)
  // }, (err) => {
  //   console.log('Unable to delete todos with text eat lunch', err)
  // })

  // deleteOne User
  db.collection('Users').deleteOne({_id: new ObjectID('5b4ca842d716fec908ac1287')}).then((res) => {
    console.log(res)
  }, (err) => {
    console.log('Unable to delete todos with text eat lunch', err)
  })

  client.close()
})
