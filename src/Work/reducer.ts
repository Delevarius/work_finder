// src/store/chat/reducers.ts
import { LOAD_DATA, initialState } from './types'

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