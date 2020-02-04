import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import authReducer from '../../components/auth/authReducer';


const rootReducer = combineReducers({
 
  form: FormReducer,
  auth: authReducer,

});

export default rootReducer;
