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

interface RestaurantDetailsModalProps {
  open: boolean
  onSubmit: () => void
  onClose: () => void
}

export const DeleteRestaurantModal: FC<RestaurantDetailsModalProps> = ({
  open,
  onClose,
  onSubmit
}) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogSurface>
        <DialogBody>
          <DialogTitle>Restaurant Deletion</DialogTitle>
          <DialogContent>
            Are you sure you want to delete this restaurant?
          </DialogContent>
          <DialogActions>
            <DialogTrigger disableButtonEnhancement>
              <Button appearance='secondary'>Cancel</Button>
            </DialogTrigger>
            <Button appearance='primary' onClick={onSubmit}>
              Yes
            </Button>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  )
}
