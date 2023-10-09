import { rest } from 'msw'

let restaurantsData = [
  {
    id: 1,
    name: 'Boston Kitchen Pizza',
    city: 'Boston',
    rating: 4.8,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
  },
  {
    id: 2,
    name: 'Galvin at Windows',
    city: 'London',
    rating: 4.6,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
  },
  {
    id: 3,
    name: 'Gramercy Tavern',
    city: 'New York',
    rating: 4.6,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
  },
  {
    id: 4,
    name: 'Row 34',
    city: 'Boston',
    rating: 4.8,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
  },
  {
    id: 5,
    name: 'Tavernetta',
    city: 'Odessa',
    rating: 4.3,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
  },
  {
    id: 6,
    name: 'Restaurant Tim Raue',
    city: 'Berlin',
    rating: 4.6,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
  },
  {
    id: 7,
    name: 'Epicure',
    city: 'Paris',
    rating: 4.7,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
  },
  {
    id: 8,
    name: 'Food Of Roma & India',
    city: 'Rome',
    rating: 3.8,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 9,
    name: 'Soul Kitchen',
    city: 'Warsaw',
    rating: 4.7,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 10,
    name: 'DiverXO',
    city: 'Madrid',
    rating: 4.4,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
  },
  {
    id: 11,
    name: 'Ostra',
    city: 'Boston',
    rating: 4.7,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
  },
  {
    id: 12,
    name: 'St. JOHN Restaurant',
    city: 'London',
    rating: 4.5,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
  },
  {
    id: 13,
    name: 'Family Meal at Blue Hill',
    city: 'New York',
    rating: 4.6,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
  },
  {
    id: 14,
    name: 'TEXAS BBQ',
    city: 'Odessa',
    rating: 4.0,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
  },
  {
    id: 15,
    name: 'Salamat',
    city: 'Berlin',
    rating: 4.7,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
  },
  {
    id: 16,
    name: 'Frenchie',
    city: 'Paris',
    rating: 4.5,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
  },
  {
    id: 17,
    name: 'Pane e Salame',
    city: 'Rome',
    rating: 4.8,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
  },
  {
    id: 18,
    name: 'Restauracja Delicja Polska',
    city: 'Warsaw',
    rating: 4.7,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
  },
  {
    id: 19,
    name: 'Mas Al Sur',
    city: 'Madrid',
    rating: 4.4,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
  },
  {
    id: 20,
    name: 'Boston Sail Loft',
    city: 'Boston',
    rating: 4.6,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
  }
]

export const handlers = [
  rest.get('*/restaurants', async (req, res, ctx) => {
    let response = restaurantsData
    const filterCities = req.url.searchParams.getAll('selectedOptions')

    if (filterCities.length > 0) {
      response = restaurantsData.filter((restaurant) =>
        filterCities.includes(restaurant.city)
      )
    }

    return res(ctx.delay(1000), ctx.status(200), ctx.json(response))
  }),
  rest.post('*/restaurants', async (req, res, ctx) => {
    const newRestaurant = await req.json()
    restaurantsData = [
      ...restaurantsData,
      {
        id: Math.random().toString(16).slice(2),
        ...newRestaurant,
        rating: Number(newRestaurant.rating)
      }
    ]

    return res(ctx.delay(1000), ctx.status(200))
  }),

  rest.put('*/restaurants/:restaurantId', async (req, res, ctx) => {
    const { restaurantId } = req.params
    const updatedRestaurant = await req.json()

    restaurantsData = restaurantsData.map((restaurant) => {
      if (restaurant.id.toString() === restaurantId) {
        return {
          ...restaurant,
          ...updatedRestaurant,
          rating: Number(updatedRestaurant.rating)
        }
      }

      return restaurant
    })

    return res(ctx.delay(1000), ctx.status(200))
  }),

  rest.delete('*/restaurants/:restaurantId', (req, res, ctx) => {
    const { restaurantId } = req.params

    restaurantsData = restaurantsData.filter(
      (restaurant) => restaurant.id.toString() !== restaurantId
    )

    return res(ctx.delay(1000), ctx.status(200))
  })
]
