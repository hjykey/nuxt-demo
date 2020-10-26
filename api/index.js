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

  res.end('无response时输出！')
})

export default {
  path: 'api',
  handler: app
}
