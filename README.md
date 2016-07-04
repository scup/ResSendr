# ![ResSender](http://i.imgur.com/GUhAwKz.jpg)

## ResSendr - Friendly request handlers.

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

app.get('/hello',r.handle(requestHandler))

function requestHandler(req){
  return 'World!';
}
```


### Using with promises


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



### Writing your own handlers
```javascript
import r from 'ressendr'


//First we need a function that returns true or false
//true if the data can be handle by the handler.
//so lets write a number Handler

let isNumber = value => !isNaN(value);

//Now we need to handle the value and send it.

let handler = (v,res) => res.end(v.toString());

r.addHandler(isNumber,handler);

app.get('/hello',r.handle(requestHandler))

function requestHandler(req, res){
  return 2
}

```
