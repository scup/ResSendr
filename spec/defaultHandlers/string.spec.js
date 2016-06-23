import stringHandler from '../../src/defaultHandlers/string';

describe('String Handler',function(){

  it('should returns true confirming that 2 is NOT a string',()=>{
    expect(stringHandler.check(2)).toBe(false);
  });

  it('should returns false confirming that "a" is a string',()=>{
    expect(stringHandler.check('a')).toBe(true);
  });

  it('should returns false confirming that {} is NOT a string',()=>{
    expect(stringHandler.check({})).toBe(false);
  });

  it('should returns false confirming that [] is NOT a string',()=>{
    expect(stringHandler.check([])).toBe(false);
  });

  it('should returns false confirming that true is NOT a string',()=>{
    expect(stringHandler.check(undefined)).toBe(false);
  });

  it('should returns false confirming that false is NOT a string',()=>{
    expect(stringHandler.check(false)).toBe(false);
  });

  it('should returns false confirming that true is NOT a string',()=>{
    expect(stringHandler.check(true)).toBe(false);
  });

  it('should returns false confirming that console.log is NOT a string',()=>{
    expect(stringHandler.check(function(){})).toBe(false);
  });

  it('should returns false confirming that Promise is NOT a string',()=>{
    expect(stringHandler.check(new Promise(()=>{}))).toBe(false);
  });
});
