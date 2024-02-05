import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { SettingsState, DieOption, Player } from '../..';

const initialState: SettingsState = {
  numberOfPlayers: '4',
  die: 'manual',
  players: [],
  started: false,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setNumberOfPlayers: (state, action: PayloadAction<string>) => {
      state.numberOfPlayers = action.payload;
    },
    setDieOption: (state, action: PayloadAction<DieOption>) => {
      state.die = action.payload;
    },
    setPlayers: (state, action: PayloadAction<Array<Player>>) => {
      const newPlayer = action.payload.map((el, i) => {
        if (i === 0) {
          return { ...el, isActive: true, position: 0 };
        }
        return { ...el, isActive: false, position: 0 };
      });
      state.players = newPlayer;

      state.started = true;
    },
    setGameReset: (state) => {
      state.started = false;
      state.players = [];
    },
  },
});

export const { actions: settingsActions } = settingsSlice;

export const { reducer: settingsReducer } = settingsSlice;
