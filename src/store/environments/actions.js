import * as types from './types';

export function increaseCounter(payload) {
  return {
    type: types.INCREASE_COUNTER,
    payload,
  };
}

export function decreaseCounter(payload) {
  return {
    type: types.DECREASE_COUNTER,
    payload,
  };
}

export function setTheme(payload) {
  return {
    type: types.SET_THEME,
    payload,
  };
}
