import Handler from '../Handler';

const checker = function(value){
  return typeof value === 'number';
};

const resolver = function(value){
  return value.toString();
};

export default (new Handler(checker,resolver));
