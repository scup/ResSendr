import Handler from '../Handler';

const isPromise = (v) => v.hasOwnProperty('then');

const checker = function(value){
  return typeof value === 'object' && !Array.isArray(value) && (!isPromise(value));
};

const resolver = function(value){
  return JSON.stringify(value);
};

export default (new Handler(checker,resolver));
