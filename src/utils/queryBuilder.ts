export interface queryObject {
  [key: string]: string | number | boolean;
}

export interface query extends queryObject {
  page: number;
  limit: number;
}

function queryBuilder(queryObject: queryObject): string {
  return Object.keys(queryObject)
    .map((key) => `_${encodeURIComponent(key)}=${encodeURIComponent(queryObject[key].toString())}`)
    .join('&');
}
export default queryBuilder;
