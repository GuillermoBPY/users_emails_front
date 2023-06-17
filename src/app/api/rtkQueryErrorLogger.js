import { isFulfilled, isRejectedWithValue } from '@reduxjs/toolkit'
import { showNotification } from '../notification/notificationSlice';

/**
 * Log a warning and show a toast!
 */
export const rtkQueryErrorLogger = (api) => (next) => (action) => {

  if (isRejectedWithValue(action)) {
    api.dispatch(showNotification({
      message: action.payload.notification || "There was an error",
      variant: "danger"
    }));
  } else if (isFulfilled(action) && action.payload.notification) {
    api.dispatch(showNotification({
      message: action.payload.notification,
      variant: "success"
    }));
  }

  return next(action)
}