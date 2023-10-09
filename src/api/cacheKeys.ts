export const QUERY_CACHE_KEYS = {
  restaurants: 'restaurants',
  restaurant: (id: string) => `restaurants-${id}`
}