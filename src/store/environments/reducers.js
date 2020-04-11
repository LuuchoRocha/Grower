import * as types from './types';

const initialState = {
  counter: 0,
  theme: 'system',
  environments: [
    {
      id: '1',
      name: 'Madera',
      description:
        'Este es un indoor de 1,20m * 1,20m * 1,80m, construido en madera y que permite cosechas muy voluminosas.',
    },
    {
      id: '2',
      name: 'Carpa',
      description:
        'Este es un indoor de 0,80m * 0,80m * 1,60m, construido en caño y tela que permite iniciar ciclos cómoda y rápidamente.',
    },
  ],
};

const environmentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INCREASE_COUNTER: {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }
    case types.DECREASE_COUNTER: {
      return {
        ...state,
        counter: state.counter - 1,
      };
    }
    case types.SET_THEME: {
      return {
        ...state,
        theme: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default environmentsReducer;
