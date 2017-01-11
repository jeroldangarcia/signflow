var jsonServer = require('json-server')
var server = jsonServer.create()
var router = jsonServer.router('src/api/db.json')
var middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.bodyParser)

const users = {
  p_lopez: {
    "_id":"58505fc215d14cd1de5cc03c",
    "email":"p_lopez@eci.es",
    "name":"Pedro",
    "family_name":"López",
    "login":"p_lopez",
    "roles":["compras"]
  }
}

server.post('/authenticate', function (req, res) {
  console.log(req.body)
  res.jsonp({
    success: true,
    token: req.body.login,
  })
})

server.get('/api/me', function (req, res) {
  console.log(req.headers)
  res.jsonp({ me: users[req.headers['x-access-token']]});
})

server.use(function (req, res, next) {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }
  // Continue to JSON Server router
  next()
})

// Use default router
server.use(router)
server.listen(5000, function () {
  console.log('JSON Server is running')
})
