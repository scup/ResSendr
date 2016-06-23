import objectHandler from '../../src/defaultHandlers/object';

describe('Object Handler',function(){

  it('should returns true confirming that 2 is NOT an object',()=>{
    expect(objectHandler.check(2)).toBe(false);
  });

  it('should returns false confirming that "a" is NOT an object',()=>{
    expect(objectHandler.check('a')).toBe(false);
  });

  it('should returns false confirming that {} is an object',()=>{
    expect(objectHandler.check({})).toBe(true);
  });

  it('should returns false confirming that [] is NOT an object',()=>{
    expect(objectHandler.check([])).toBe(false);
  });

  it('should returns false confirming that true is NOT an object',()=>{
    expect(objectHandler.check(undefined)).toBe(false);
  });

  it('should returns false confirming that false is NOT an object',()=>{
    expect(objectHandler.check(false)).toBe(false);
  });

  it('should returns false confirming that true is NOT an object',()=>{
    expect(objectHandler.check(true)).toBe(false);
  });

  it('should returns false confirming that function is NOT an object',()=>{
    expect(objectHandler.check(function(){})).toBe(false);
  });

  it('should returns false confirming that Promise is NOT an object',()=>{
    expect(objectHandler.check(new Promise(()=>{}))).toBe(false);
  });
});
