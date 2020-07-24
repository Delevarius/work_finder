import { LOAD_DATA } from './types'; 
import { fetchWorkItems } from './fetch';

// This function would be one using either Thunk or ReduxSagas, depnending on the complexity
// and needs of the projects
export function loadData() {
  return {
    type: LOAD_DATA,
    data: fetchWorkItems()
  }
}