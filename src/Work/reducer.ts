import { LOAD_DATA, SET_FILTER_INDUSTRY, SET_CATEGORY_INDUSTRY, initialState, WorkItem } from './types'

function workReducer (state = initialState, action: any) {
    switch(action.type) {
      case LOAD_DATA:
        const filterCatergoryOptions = action.data
          .reduce((reduced:Array<string>, next: WorkItem) => {
            const isAdded = reduced.findIndex(o => o === next.category)
            if (isAdded !== -1) {
              return reduced;
            }
            return [ ...reduced, next.category ];
          }, ['all work'])
        const filterIndustryOptions = action.data
          .reduce((reduced:Array<string>, next: WorkItem) => {
            const isAdded = reduced.findIndex(o => o === next.industry)
            if (isAdded !== -1) {
              return reduced;
            }
            return [ ...reduced, next.industry ];
          }, ['all industries'])
        const currentUrl = window.location.pathname.split('/');
        const currentIndustryFilter = (
            currentUrl!== undefined &&
            filterIndustryOptions.find((o:any) => `industries=${o}` === currentUrl.find(o => o.split('=')[0]=== 'industries'))
          ) ?
            filterIndustryOptions.find((o:any) => `industries=${o}` === currentUrl.find(o => o.split('=')[0]=== 'industries')) :
            filterIndustryOptions[0];

        const currentCategoryFilter = (
            currentUrl!== undefined &&
            filterCatergoryOptions.find((o:any) => `category=${o}` === currentUrl.find(o => o.split('=')[0]=== 'category'))
          ) ?
            filterCatergoryOptions.find((o:any) => `category=${o}` === currentUrl.find(o => o.split('=')[0]=== 'category')) :
            filterCatergoryOptions[0];
        return {
          ...state,
          workItems: action.data,
          filterIndustryOptions,
          filterCatergoryOptions,
          currentIndustryFilter,  
          currentCategoryFilter
        };
      case SET_FILTER_INDUSTRY:
        return {
          ...state,
          currentIndustryFilter: action.filter
        };
      case SET_CATEGORY_INDUSTRY:
        return {
          ...state,
          currentCategoryFilter: action.filter
        };
      default:
        return state;
    }
}
export default workReducer;