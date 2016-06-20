export default class Handler{
    constructor(checker, resolver){
      this.checker = checker
      this.resolver = resolver
    }

    check(value){
      return this.checker(value);
    }

    resolve(value,callback){
      if (callback)
        return callback(this.resolver(value));
      return this.resolver(value);
    }
}
