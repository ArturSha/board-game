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
          return { ...el, isActive: true, position: 0, name: el.name.trim() };
        }
        return { ...el, isActive: false, position: 0, name: el.name.trim() };
      });
      state.players = newPlayer;

      state.started = true;
    },
    setGameReset: (state) => {
      state.started = false;
      state.players = [];
    },
    setPosition: (state, action: PayloadAction<Array<Player>>) => {
      const updatedPlayer = action.payload[0];
      const currentPlayerIndex = state.players.findIndex(
        (player) => player.id === updatedPlayer.id
      );

      const nextPlayerIndex =
        currentPlayerIndex + 1 >= state.players.length
          ? 0
          : currentPlayerIndex + 1;

      state.players = state.players.map((player, index) => {
        if (index === nextPlayerIndex) {
          return { ...player, isActive: true };
        } else if (index === currentPlayerIndex) {
          return {
            ...player,
            isActive: false,
            position: updatedPlayer.position,
          };
        }
        return player;
      });
    },
  },
});

export const { actions: settingsActions } = settingsSlice;

export const { reducer: settingsReducer } = settingsSlice;
