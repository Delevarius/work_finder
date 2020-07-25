export const LOAD_DATA = 'LOAD_DATA';
export const SET_FILTER_INDUSTRY = 'SET_FILTER_INDUSTRY';
export const SET_CATEGORY_INDUSTRY = 'SET_CATEGORY_INDUSTRY';

export type WorkItem = {
    description: string;
    image: string | null;
    title: string;
    category: string;
    industry: string;
}
export type WorkItems = Array<WorkItem>
export type FilterIndustryOptions = Array<String>
export type FilterCatergoryOptions = Array<String>
export type WorkState = {
    workItems: WorkItems,
    filterIndustryOptions: FilterIndustryOptions,
    filterCatergoryOptions: FilterCatergoryOptions,
    currentIndustryFilter: string,
    currentCategoryFilter: string
  }
  
export const initialState: WorkState = {
    workItems: [],
    filterIndustryOptions: [],
    filterCatergoryOptions: [],
    currentIndustryFilter: '',
    currentCategoryFilter: ''
};
