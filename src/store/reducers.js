import {
  SET_USER,
  UPDATE_USER,
  REMOVE_USER,
} from './actionsUser';
import { SET_ERROR } from './actionsError';


export const user = (state = false, { type, data }) => {
  switch (type) {
    case UPDATE_USER:
    case SET_USER: {
      return data;
    }

    case REMOVE_USER:
      return null;
  }

  return state;
};



export const error = (state = '', { type, data = '' }) => {
  switch (type) {
    case SET_ERROR:
      return data;
  }
  return state;
};
