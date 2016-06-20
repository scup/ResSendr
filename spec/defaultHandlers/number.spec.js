import numberHandler from '../../lib/defaultHandlers/number'

describe('Number Handler',function(){

  it('should returns true confirming that its a number',()=>{
    expect(numberHandler.check(2)).toBe(true)
  })

  it('should returns false confirming that "a" is NOT a number',()=>{
    expect(numberHandler.check('a')).toBe(false)
  })

  it('should returns false confirming that {} is NOT a number',()=>{
    expect(numberHandler.check({})).toBe(false)
  })

  it('should returns false confirming that [] is NOT a number',()=>{
    expect(numberHandler.check([])).toBe(false)
  })

  it('should returns false confirming that true is NOT a number',()=>{
    expect(numberHandler.check(undefined)).toBe(false)
  })

  it('should returns false confirming that false is NOT a number',()=>{
    expect(numberHandler.check(false)).toBe(false)
  })

  it('should returns false confirming that true is NOT a number',()=>{
    expect(numberHandler.check(true)).toBe(false)
  })

  it('should returns false confirming that console.log is NOT a number',()=>{
    expect(numberHandler.check(console.log)).toBe(false)
  })

  it('should returns false confirming that Promise is NOT a number',()=>{
    expect(numberHandler.check(new Promise(()=>{}))).toBe(false)
  })
})
