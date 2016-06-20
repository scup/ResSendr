class ResponseManager{

  constructor(){
    this.handlers = [];
  }

  handle(fn){
    return (req,res,next)=>{
      if (typeof fn === 'function'){
        fn = fn(req,res,next);
      }
      return this.resolve(fn,res);
    }
  }

  addHandler(handlr){
    if (handlr instanceof Handler){
      handlr.addManager(this);
      return this.handlers.push(handlr);
    }
    return false
  }

  resolve(response,res){

    this.handlers.forEach(function(handler){
      if (handler.check(response)){
        handler.handle(response,res,this);
      }
    })

    if (response.then){
      return response.then((result)=>{
        resolve(result,res);
      })
    }

    if (typeof response === 'string'){
      return res.end(response);
    }

    if (typeof response === 'object'){
      return res.end(JSON.stringify(response));
    }

    if (typeof response === 'number'){
      return res.end(response.toString());
    }

  }
}

module.exports = new ResponseManager()
