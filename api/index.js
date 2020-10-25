import express from 'express'
const app = express();

app.get('/hello', (req, res) => {
  // res.send('Hello World!')

  // res.json({
  //   name: 'jason',
  //   age: 18,
  //   interest: 'vue'
  // })

  res.send({
    name: 'jason',
    age: 18,
    interest: 'vue'
  })

})

export default {
  path: 'api',
  handler: app
}
