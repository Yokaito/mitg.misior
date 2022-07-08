import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { AppState } from '../..';
import { initialState, MenuItem } from './initialState';

type SetInitiallyOpen = {
  payload: {
    text: string;
    initiallyOpen: boolean;
  };
};

export const menuSlicer = createSlice({
  name: `menu`,
  initialState,
  reducers: {
    setInitiallyOpen: (state: MenuItem[], action: SetInitiallyOpen) => {
      const { initiallyOpen, text } = action.payload;

      state.find((item) => {
        if (item.initiallyOpen) {
          item.initiallyOpen = false;
        }
      });

      state.find((item) => {
        if (item.text === text) {
          item.initiallyOpen = initiallyOpen;
        }
      });

      return state;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log(`hydrate`, action.payload);
      return {
        ...state,
        ...action.payload.menu,
      };
    },
  },
});

export const { setInitiallyOpen } = menuSlicer.actions;
export const getMenu = () => (state: AppState) => state.menu;

export default menuSlicer;
