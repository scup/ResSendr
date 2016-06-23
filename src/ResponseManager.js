import Handler from './Handler.js';
import consts from './consts';

export default class ResponseManager{
  constructor(){
    this.handlers = [];
    this.customHandlers = [];
  }

  addCustomHandler(handler,resolver){
    if (!(handler instanceof Handler))
      return this.customHandlers.push(new Handler(handler, resolver));
    return this.customHandlers.push(handler);
  }

  addHandler(handler,resolver){
    if (!(handler instanceof Handler))
      return this.handlers.push(new Handler(handler, resolver));
    return this.handlers.push(handler);
  }

  handle(method){
    return (req, res, next)=>{
      const value = method(req,res,next);
      return this._resolve(value,res);
    };
  }

  _checkResolver(value){
    return (handler) => handler.check(value);
  }

  _findCustomResolver(value){
    return this.customHandlers.find(this._checkResolver(value));
  }

  _findResolver(value){
    return this.handlers.find(this._checkResolver(value));
  }

  _resolve(value,res){
    const customResolver = this._findCustomResolver(value);


    if (customResolver){
      value = customResolver.resolve(value,res,this._resolve.bind(this));
      if (value == consts.delayedSolver){
        return consts.delayedSolver;
      }
    }

    const resolver = this._findResolver(value);
    if (resolver){

      const solvedValue = resolver.resolve(value,res,this._resolve.bind(this));
      if (solvedValue !== consts.delayedSolver){
        return res.end(solvedValue);
      }else{
        return consts.delayedSolver;
      }
    }

    throw 'Response Handler could not find a proper handler for this value';
  }

}
