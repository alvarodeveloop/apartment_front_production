const initialState = {
  config: null
};

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case 'setConfig':
      return Object.assign({},state,{
        config: action.config
      })
    break;
    case 'removeConfig':
      return Object.assign({},{},{
        config: null,
      })
    break;
    default: return state;
  }
}
