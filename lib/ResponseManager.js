import Handler from './Handler';
import consts from './consts'

export default class ResponseManager{
  constructor(){
    this.handlers = [];
  }

  addHandler(handler){
    if (!(handler instanceof Handler))
      throw 'Handler must be a Handler instance';

    return this.handlers.push(handler);
  }

  handle(method){
    return (req, res, next)=>{
      let value = method(req,res,next)
      let solvedValue = this.resolve(value);

      if (solvedValue !== consts.delayedSolver){
          return res.end(solvedValue);
      }

    }
  }

  checkResolver(value){
    return (handler) => handler.check(value);
  }

  findResolver(value){
    return this.handlers.find(this.checkResolver(value))
  }

  resolve(value){
    let resolver = this.findResolver(value);
    if (resolver)
      return resolver.resolve(value)
    throw 'Response Handler could not find a proper handler for this value';
  }

}
