import objectHandler from '../../lib/defaultHandlers/object'

describe('Object Handler',function(){

  it('should returns true confirming that its an object',()=>{
    expect(objectHandler.check(2)).toBe(false)
  })

  it('should returns false confirming that "a" is NOT an object',()=>{
    expect(objectHandler.check('a')).toBe(false)
  })

  it('should returns false confirming that {} is NOT an object',()=>{
    expect(objectHandler.check({})).toBe(true)
  })

  it('should returns false confirming that [] is NOT an object',()=>{
    expect(objectHandler.check([])).toBe(false)
  })

  it('should returns false confirming that true is NOT an object',()=>{
    expect(objectHandler.check(undefined)).toBe(false)
  })

  it('should returns false confirming that false is NOT an object',()=>{
    expect(objectHandler.check(false)).toBe(false)
  })

  it('should returns false confirming that true is NOT an object',()=>{
    expect(objectHandler.check(true)).toBe(false)
  })

  it('should returns false confirming that console.log is NOT an object',()=>{
    expect(objectHandler.check(console.log)).toBe(false)
  })

  it('should returns false confirming that Promise is NOT an object',()=>{
    expect(objectHandler.check(new Promise(()=>{}))).toBe(false)
  })
})
