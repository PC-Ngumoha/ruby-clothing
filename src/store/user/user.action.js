import { USER_ACTIONS } from './user.types';
import { createAction } from '../../utils/reducer/reducer.util';

export const setCurrentUser = (user) => {
  return createAction(
    USER_ACTIONS.SET_CURRENT_USER,
    user
  )
};
