import isEmpty from 'lodash/isEmpty';

const initialState = {
  ownerships: [],
  ownership_selected: null
};

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case 'setOwnerships':
      return {
        ownerships: action.data,
        ownership_selected: action.data.length > 0 ? action.data[0].id_ownership : null
      };
    break;
    case 'selectOwnership':

      return Object.assign({},state,{
        ownership_selected: action.data
      })
    break;
    case 'cleanOwenerships':
      return {
        ownerships: [],
        ownership_selected: null
      };
    break;
    default: return state;
  }
}
