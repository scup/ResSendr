import ResponseManager from '../src/ResponseManager';
import Handler from '../src/Handler';
import promiseHandler from '../src/defaultHandlers/promise';


describe("ResponseManager", ()=>{

  describe("ResponseManager.addHandler", ()=>{
    it("should add a Handler instance", ()=>{

      const rm = new ResponseManager();

      const handler = new Handler(
        v => typeof v === 'number',
        v => v.toString()
      );

      rm.addHandler(handler);

      expect(rm.handlers.length).toBe(1);

    });

    it("should instantiate and add a CustomHandler", ()=>{

      const rm = new ResponseManager();

      rm.addCustomHandler(
        v => typeof v === 'number',
        v => v.toString()
      );

      expect(rm.customHandlers.length).toBe(1);

    });


  });

  describe("ResponseManager.handle", ()=>{

    it("should handle a number", ()=>{
      const rm = new ResponseManager();
      const handler = new Handler(
        v => typeof v === 'number',
        v => v.toString()
      );
      rm.addHandler(handler);


      let result;
      const res = {
        end(v){
          result = v;
        }
      };

      const reqHandler = rm.handle(() => 2);
      reqHandler(false,res);

      expect(result).toBe('2');

    });


    it("should handle a promise", (done)=>{
      const rm = new ResponseManager();
      const handler = new Handler(
        v => typeof v === 'number',
        v => v.toString()
      );
      rm.addHandler(promiseHandler);
      rm.addHandler(handler);

      let result;
      const res = {
        end(v){
          result = v;
        }
      };

      rm.addHandler(promiseHandler);
      const reqHandler = rm.handle(() => Promise.resolve(2));
      reqHandler(false,res);

      setTimeout(()=>{
        expect(result).toBe('2');
        done();
      },100);

    });

  });

});
