import isEmpty from 'lodash/isEmpty';

const initialState = {
  housing: {},
};

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case 'setHousing':
      return {
        housing: action.data,
      };
    break;
    case 'cleanHousing':
      return {
        housing: {},
      };
    break;
    default: return state;
  }
}
