import { combineReducers } from 'redux';
import auth from './reducer/auth';
import sale from './reducer/sale';
import configs from './reducer/configs';
import menu from './reducer/menu';
import theme from './reducer/theme';

export default combineReducers({
  auth,
  sale,
  configs,
  menu,
  theme
});
