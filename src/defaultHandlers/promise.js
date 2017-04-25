import consts from '../consts';
import Handler from '../Handler';

const checker = value =>
  !!value &&
  !!value.then &&
  !!value.catch;

const resolver = function(value, res, delayedSolver){
  value.then(v=>delayedSolver(v, res, delayedSolver));
  return consts.delayedSolver;
};

export default (new Handler(checker, resolver));
