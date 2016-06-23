import ResponseManager from '../src/ResponseManager';
import Handler from '../src/Handler';
import promiseHandler from '../src/defaultHandlers/promise';


describe("ResponseManager", ()=>{

  describe("ResponseManager.addHandler", ()=>{
    it("should add a Handler instance", ()=>{

      let rm = new ResponseManager();

      let handler = new Handler(
        v => typeof v === 'number',
        v => v.toString()
      );

      rm.addHandler(handler)

      expect(rm.handlers.length).toBe(1)

    });

    it("should instantiate and add a Handler", ()=>{

      let rm = new ResponseManager();

      rm.addHandler(
        v => typeof v === 'number',
        v => v.toString()
      )

      expect(rm.handlers.length).toBe(1)

    });


  })

  describe("ResponseManager.handle", ()=>{

    it("should handle a number", ()=>{
      let rm = new ResponseManager();
      let handler = new Handler(
        v => typeof v === 'number',
        v => v.toString()
      );
      rm.addHandler(handler)


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


    it("should handle a promise", (done)=>{
      let rm = new ResponseManager();
      let handler = new Handler(
        v => typeof v === 'number',
        v => v.toString()
      );
      rm.addHandler(promiseHandler)
      rm.addHandler(handler)

      let result;
      let res = {
        end(v){
          result = v;
        }
      }

      rm.addHandler(promiseHandler);
      let reqHandler = rm.handle(_ => Promise.resolve(2));
      reqHandler(false,res);

      setTimeout(()=>{
        expect(result).toBe('2')
        done()
      },100)

    })

  })

});
