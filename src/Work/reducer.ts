// src/store/chat/reducers.ts
import { LOAD_DATA } from './types'

const initialState: any = {
  workItems: []
};
  
function workReducer (state = initialState, action: any) {
    switch(action.type) {
      case LOAD_DATA:
        return {
          ...state,
          workItems: action.data
        }
      default:
        return state;
    }
}
export default workReducer;