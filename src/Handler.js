export default class Handler{
    constructor(checker, resolver){
      this.checker = checker;
      this.resolver = resolver;
    }

    check(value){
      return this.checker(value);
    }

    resolve(value,res,cb){
      return this.resolver(value,res,cb);
    }
}
