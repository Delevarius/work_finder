import { LOAD_DATA } from './types'; 
import workItemsJSON from '../lib/resources/api/text-previews-metadata.json'

export function loadData() {
  const data: any = [];
  console.log(workItemsJSON)
  return {
    type: LOAD_DATA,
    data
  }
}