{before} = require('hooks')

# Start test server
require('./bug-server.js')

before 'GET /widgets -> 404', (test, done) ->
  test.request.path = '/totally-wrong'
  done()

before 'GET /widgets -> 500', (test, done) ->
  test.request.query =
    foo: 'bar'
  done()

before 'GET /widgets/{id} -> 404', (test, done) ->
  test.request.path = '/totally-wrong'
  done()

before 'GET /widgets/{id} -> 500', (test, done) ->
  test.request.params =
    id: 'spurious-01'
  done()
