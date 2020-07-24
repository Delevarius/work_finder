import workItemsJSON from '../lib/resources/api/text-previews-metadata.json'

export const fetchWorkItems = () => {
  return workItemsJSON.data;
}