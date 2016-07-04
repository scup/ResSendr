# ![ResSender](http://i.imgur.com/GUhAwKz.jpg)

## ResSender - Friendly request handlers.

### Installing
    $ npm install ressendr --save

### Using

#### before
```javascript

app.get('/hello',requestHandler)

function requestHandler(req, res){
  res.end('World!')
}
```

#### after
```javascript
import r from 'ressendr'

app.get('/hello',requestHandler)

function requestHandler(req){
  return 'World!';
}
```


##### Using with promises.


#### before
```javascript

app.get('/hello',requestHandler)

function requestHandler(req, res){
  asyncIO.get()
  .then((response)=>{
    res.end(response);
  })
}
```

#### after
```javascript
import r from 'ressendr'

app.get('/hello',r.handle(requestHandler))

function requestHandler(req){
  return asyncIO.get()
}
```
