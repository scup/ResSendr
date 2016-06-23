import Handler from '../src/Handler';

describe("Handler", function() {

  const checker = (v) => typeof v === 'number';

  const resolver = (v)=>{
    if (typeof v === 'number'){
      return v.toString();
    }
  };

  let handlr = '';

  it("Handler.constructor should construct a handler", function(){

    handlr = new Handler(checker,resolver);

    expect(handlr.checker).toBe(checker);
    expect(handlr.resolver).toBe(resolver);
  });

  it("Handler.check should check and pass a value", function(){
    expect(handlr.check(1)).toBe(true);
  });

  it("Handler.check should check and not pass a value", function(){
    expect(handlr.check('1')).toBe(false);
  });

  it("Handler.resolve should resolve a value", function(){
    expect(handlr.resolve(1)).toBe('1');
  });

});
