import numberHandler from '../../src/defaultHandlers/number';

describe('Number Handler',function(){

  it('should returns true confirming that 2 is a number',()=>{
    expect(numberHandler.check(2)).toBe(true);
  });

  it('should returns false confirming that "a" is NOT a number',()=>{
    expect(numberHandler.check('a')).toBe(false);
  });

  it('should returns false confirming that {} is NOT a number',()=>{
    expect(numberHandler.check({})).toBe(false);
  });

  it('should returns false confirming that [] is NOT a number',()=>{
    expect(numberHandler.check([])).toBe(false);
  });

  it('should returns false confirming that true is NOT a number',()=>{
    expect(numberHandler.check(undefined)).toBe(false);
  });

  it('should returns false confirming that false is NOT a number',()=>{
    expect(numberHandler.check(false)).toBe(false);
  });

  it('should returns false confirming that true is NOT a number',()=>{
    expect(numberHandler.check(true)).toBe(false);
  });

  it('should returns false confirming that function is NOT a number',()=>{
    expect(numberHandler.check(function(){})).toBe(false);
  });

  it('should returns false confirming that Promise is NOT a number',()=>{
    expect(numberHandler.check(new Promise(()=>{}))).toBe(false);
  });
});
