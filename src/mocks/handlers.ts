import { rest } from 'msw'
import restaurantsData from './restaurants.ts'

export const handlers = [
  rest.get('*/restaurants', (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200),
      ctx.json(restaurantsData)
    )
  })
]
