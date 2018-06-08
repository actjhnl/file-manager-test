import * as act from '../constants';
export default (state=[], action) => {
  const {type} = action;
  switch(type){
    case act.ADD:
      return [...state, action.file];
    case act.DELETE:
      return state.filter(element => element.name !== action.name);
    default: return state;
  }
}
