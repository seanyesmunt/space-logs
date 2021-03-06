import { createAction } from 'redux-actions'
import {
  POPULATE_VIEW_DREAM,
  DELETE_DREAM,
  TOGGLE_CONFIRM_DELETE,
} from '../constants'

export const populateViewDream = createAction(POPULATE_VIEW_DREAM)
export const toggleConfirmDelete = createAction(TOGGLE_CONFIRM_DELETE)
export const deleteDream = createAction(DELETE_DREAM)
