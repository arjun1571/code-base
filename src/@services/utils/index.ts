export interface IQueryParams {
  page?: string | number;
  limit?: string | number;
  searchTerm?: string;
  productCategory?: string;
}

export const queryStringMapper = (params?: IQueryParams): string => {
  if (!params) return "";

  const encodedParams = new URLSearchParams();
  const rawParams: string[] = [];
  if (params.searchTerm) encodedParams.append("searchTerm", params.searchTerm);
  if (params.page) encodedParams.append("page", params.page.toString());
  if (params.limit) encodedParams.append("limit", params.limit.toString());
  if (params.productCategory)
    encodedParams.append("productCategory", params.productCategory.toString());

  const encodedQuery = encodedParams.toString();
  const fullQuery = [encodedQuery, ...rawParams].filter(Boolean).join("&");

  return fullQuery ? `?${fullQuery}` : "";
};
