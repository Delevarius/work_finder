export const LOAD_DATA = 'LOAD_DATA';
  
export type WorkItem = {
    description: string;
    image: string | null;
    title: string;
    genre: string;
}
export type WorkState = {
    workItems: Array<WorkItem>
  }
  
export const initialState: WorkState = {
    workItems: []
};
