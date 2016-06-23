import promiseHandler from '../../src/defaultHandlers/promise';

describe('Promise Handler',function(){

  it('should returns false confirming that 2 is NOT a promise',()=>{
    expect(promiseHandler.check(2)).toBe(false);
  });

  it('should returns false confirming that "a" is NOT a promise',()=>{
    expect(promiseHandler.check('a')).toBe(false);
  });

  it('should returns false confirming that {} is NOT a promise',()=>{
    expect(promiseHandler.check({})).toBe(false);
  });

  it('should returns false confirming that [] is NOT a promise',()=>{
    expect(promiseHandler.check([])).toBe(false);
  });

  it('should returns false confirming that true is NOT a promise',()=>{
    expect(promiseHandler.check(undefined)).toBe(false);
  });

  it('should returns false confirming that false is NOT a promise',()=>{
    expect(promiseHandler.check(false)).toBe(false);
  });

  it('should returns false confirming that true is NOT a promise',()=>{
    expect(promiseHandler.check(true)).toBe(false);
  });

  it('should returns false confirming that function is NOT a promise',()=>{
    expect(promiseHandler.check(function(){})).toBe(false);
  });

  it('should returns true confirming that Promise is a promise',()=>{
    expect(promiseHandler.check(new Promise(()=>{}))).toBe(true);
  });

});
