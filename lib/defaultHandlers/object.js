import Handler from '../Handler'

const checker = function(value){


  var isPromise = (v) => {
    if (Promise)
      return v instanceof Promise
    return v.hasOwnProperty('then')
  };

  return typeof value === 'object' && !Array.isArray(value) && (!isPromise(value))

}

const resolver = function(value){
  return JSON.stringify(value);
}

export default (new Handler(checker,resolver))
