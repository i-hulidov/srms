import { ReactNode } from 'react'
import { renderHook, waitFor, act } from '@testing-library/react'
import { setupServer } from 'msw/node'
import { QueryCache, QueryClientProvider, QueryClient } from 'react-query'
import { handlers, restaurantsData } from '../../../mocks/handlers.ts'
import { useRestaurantsList } from '../useRestaurantsList.ts'

const queryCache = new QueryCache()
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false
    }
  }
})

const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

const server = setupServer(...handlers)

beforeAll(() => server.listen())
afterEach(() => {
  server.resetHandlers()
  queryCache.clear()
})
afterAll(() => server.close())

describe('useRestaurantList', () => {
  it('should return mocked restaurants', async () => {
    const { result } = renderHook(() => useRestaurantsList(), {
      wrapper
    })

    await waitFor(
      () => {
        expect(result.current.restaurants).toStrictEqual(restaurantsData)
      },
      { timeout: 2000 }
    )
  })

  it('should return restaurants filtered by city', async () => {
    const { result } = renderHook(() => useRestaurantsList(), {
      wrapper
    })

    const filterCities = ['Boston', 'Paris']

    act(() => {
      result.current.setSelectedOptions(filterCities)
    })

    await waitFor(
      () => {
        expect(result.current.restaurants).toStrictEqual(
          restaurantsData.filter((r) => filterCities.includes(r.city))
        )
      },
      { timeout: 2000 }
    )
  })
})
