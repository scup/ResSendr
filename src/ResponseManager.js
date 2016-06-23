import Handler from './Handler.js';
import consts from './consts';

export default class ResponseManager{
  constructor(){
    this.handlers = [];
  }

  addHandler(handler){

    console.log(Handler);

    if (!(handler instanceof Handler))
      throw 'Handler must be a Handler instance';

    return this.handlers.push(handler);
  }

  handle(method){
    return (req, res, next)=>{
      let value = method(req,res,next)
      return this._resolve(value,res);
    }
  }

  _checkResolver(value){
    return (handler) => handler.check(value);
  }

  _findResolver(value){
    return this.handlers.find(this._checkResolver(value))
  }

  _resolve(value,res){
    let resolver = this._findResolver(value);
    if (resolver){

      const solvedValue = resolver.resolve(value,res,this._resolve.bind(this))
      if (solvedValue !== consts.delayedSolver){
        return res.end(solvedValue);
      }else{
        return consts.delayedSolver
      }
    }

    throw 'Response Handler could not find a proper handler for this value';
  }

}
