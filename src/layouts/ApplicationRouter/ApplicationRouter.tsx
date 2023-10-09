import { FC } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { routes } from '../../routes.ts'
import { RestaurantList } from '../../routes/RestaurantList'

export const ApplicationRouter: FC = () => {
  return (
    <Routes>
      <Route path={routes.main} element={<RestaurantList />} />
      <Route path='*' element={<Navigate to={routes.main} />} />
    </Routes>
  )
}
