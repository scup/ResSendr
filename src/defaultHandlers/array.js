import Handler from '../Handler';

const checker = function(value){
  return Array.isArray(value);
};

const resolver = function(value){
  return JSON.stringify(value);
};

export default (new Handler(checker,resolver));
