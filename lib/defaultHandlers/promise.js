import consts from '../consts'
import Handler from '../Handler'


const checker = function(value){

  if (Promise){
    return value instanceof Promise;
  }

  return value.hasOwnProperty('then') && value.hasOwnProperty('catch')
}

const resolver = function(value, delayedSolver){
  value.then(delayedSolver)
  return consts.delayedSolver;
}

export default (new Handler(checker, resolver))
