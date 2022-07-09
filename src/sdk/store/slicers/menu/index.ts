import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { AppState } from '../..';
import { initialState, MenuItem } from './initial.state';

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
    changeLanguageMenu: (state: MenuItem[], action: { payload: string }) => {
      state.forEach((item) => {
        if (action.payload === `ptBr`) {
          item.text = item.textPt;
          item.subItems.forEach((subItem) => {
            subItem.title = subItem.titlePt;
          });
        } else if (action.payload === `enUs`) {
          item.text = item.textEn;
          item.subItems.forEach((subItem) => {
            subItem.title = subItem.titleEn;
          });
        }
      });

      return state;
    },
    setInitiallyOpen: (state: MenuItem[], action: SetInitiallyOpen) => {
      const { initiallyOpen, text } = action.payload;

      state.forEach((item) => {
        if (item.initiallyOpen) {
          item.initiallyOpen = false;
        }

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

export const { setInitiallyOpen, changeLanguageMenu } = menuSlicer.actions;
export const getMenu = () => (state: AppState) => state.menu;

export default menuSlicer;
