const express = require('express')

const app = express()

// app.get is similar to our old friend addEventListener
// except we are listening for requests from a
// browser
//
// document.addEventListener('click', (event) => {
//
// })

app.get('/jason', (request, response) => {
  response.send(`
    Jason loves fooberries at ${new Date()}
    <p>
       <a href="/">Home</a>
     </p>
  `)
})

app.get('/', (request, response) => {
  response.send(`
    Hello World
    <p>
      <a href="/jason">Tell me something about Jason</a>
    </p>
  `)
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
