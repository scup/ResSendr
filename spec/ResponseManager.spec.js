import ResponseManager from '../lib/ResponseManager';
import Handler from '../lib/Handler';


describe("ResponseManager", ()=>{
  let rm = new ResponseManager();

  describe("ResponseManager.addHandler", ()=>{
    it("should add a Handler", ()=>{

      let handler = new Handler(
        v => typeof v === 'number',
        v => v.toString()
      );

      rm.addHandler(handler)

      expect(rm.handlers.length).toBe(1)

    });

    it("should complain, adding a handler that is not an instance of Handler", ()=>{

      expect(x=>rm.addHandler('handler'))
      .toThrow();

    })
  })

  describe("ResponseManager.handle", ()=>{
    let result;
    let res = {
      end(v){
        result = v;
      }
    }

    it("should handle a value", ()=>{

      let reqHandler = rm.handle((req,r) => 2);
      reqHandler(false,res);
      expect(result).toBe('2')

    })

  })

});
