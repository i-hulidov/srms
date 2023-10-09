import { FC } from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogBody,
  DialogContent,
  DialogSurface,
  DialogTitle,
  DialogTrigger
} from '@fluentui/react-components'
import StarRatings from 'react-star-ratings'
import { RestaurantEntityType } from '../../api/restaurants/types.ts'
import './RestaurantDetailsModal.scss'

interface RestaurantDetailsModalProps {
  restaurant: RestaurantEntityType | null
  open: boolean
  onClose: () => void
}

export const RestaurantDetailsModal: FC<RestaurantDetailsModalProps> = ({
  open,
  restaurant,
  onClose
}) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogSurface>
        <DialogBody>
          <DialogTitle>{restaurant?.name}</DialogTitle>
          <DialogContent className='RestaurantDetailsModal__Content'>
            <div className='RestaurantDetailsModal__Info'>
              <div>
                <span className='RestaurantDetailsModal__Label'>City:</span>
                <span>{restaurant?.city}</span>
              </div>
              <div>
                <span className='RestaurantDetailsModal__Label'>Rating:</span>
                <span style={{ marginRight: '4px' }}>{restaurant?.rating}</span>
                <StarRatings
                  rating={restaurant?.rating}
                  starRatedColor='gold'
                  numberOfStars={5}
                  starDimension='20px'
                  starSpacing='2px'
                />
              </div>
            </div>
            <div>
              <span className='RestaurantDetailsModal__Label'>
                Description:
              </span>
              <span>{restaurant?.description}</span>
            </div>
          </DialogContent>
          <DialogActions>
            <DialogTrigger disableButtonEnhancement>
              <Button appearance='secondary'>Close</Button>
            </DialogTrigger>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  )
}
