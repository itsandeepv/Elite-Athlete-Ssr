import { combineReducers } from 'redux';
import popupsReduccer from './popupsReduccer';


const rootReducer = combineReducers({
  // Add your reducers here
  popUpData :popupsReduccer,
//   categoryData :categoryreducer,
//   productsData :productreducer
  
});

export default rootReducer;