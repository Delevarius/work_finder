import { LOAD_DATA, SET_FILTER_INDUSTRY, SET_CATEGORY_INDUSTRY } from './types'; 
import { fetchWorkItems } from './fetch';

// This function would be one using either Thunk or ReduxSagas to handle async actions
// depnending on the complexity
// and needs of the projects. for now its just a function call.
export function loadData() {
  return {
    type: LOAD_DATA,
    data: fetchWorkItems()
  }
}

export function setIndustryFilter(filter: string) {
  return {
    type: SET_FILTER_INDUSTRY,
    filter
  }
}

export function setCatergoryFilter(filter: string) {
  return {
    type: SET_CATEGORY_INDUSTRY,
    filter
  }
}