import Handler from '../Handler';

const checker = function(value){
  return typeof value === 'string';
};

const resolver = function(value){
  return value;
};

export default (new Handler(checker,resolver));
