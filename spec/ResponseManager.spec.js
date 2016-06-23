import ResponseManager from '../lib/ResponseManager';
import Handler from '../lib/Handler';
import promiseHandler from '../lib/defaultHandlers/promise';


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

    it("should handle a number", ()=>{
      let result;
      let res = {
        end(v){
          result = v;
        }
      }

      let reqHandler = rm.handle((req,r) => 2);
      reqHandler(false,res);
      expect(result).toBe('2')

    })


    it("should handle a promise", ()=>{
      let result;
      let res = {
        end(v){
          result = v;
        }
      }
      
      rm.addHandler(promiseHandler);
      let reqHandler = rm.handle((req,r) => Promise.resolve(2));
      reqHandler(false,res);
      expect(result).toBe('2')

    })

  })

});
