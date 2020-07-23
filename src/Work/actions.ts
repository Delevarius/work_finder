import { LOAD_DATA } from './types'; 
import workItemsJSON from '../lib/resources/api/text-previews-metadata.json'

export function loadData() {
  const data: any = workItemsJSON.data;
  return {
    type: LOAD_DATA,
    data
  }
}