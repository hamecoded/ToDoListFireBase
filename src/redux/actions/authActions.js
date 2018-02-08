import * as AT from '../actionTypes';

export const login = (email, password) => ({
  type: AT.LOGIN,
  payload: {email, password}
});

export const setUser = (user) => ({
  type: AT.SET_USER,
  payload: {
    user
  }
})