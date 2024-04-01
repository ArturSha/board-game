import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { SettingsState, DieOption, Player } from '../..';

const initialState: SettingsState = {
  numberOfPlayers: '4',
  die: 'manual',
  players: [],
  started: false,
  isCellModalOpen: false,
  disabledBtn: false,
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
          return {
            ...el,
            isActive: true,
            position: 0,
            shotsHaveToDrink: 1,
            name: el.name.trim(),
            cups: 1,
            skipRound: false,
            quit: false,
          };
        }
        return {
          ...el,
          isActive: false,
          position: 0,
          shotsHaveToDrink: 1,
          name: el.name.trim(),
          cups: 1,
          skipRound: false,
          quit: false,
        };
      });
      state.players = newPlayer;

      state.started = true;
    },
    setGameReset: (state) => {
      state.started = false;
      state.players = [];
    },
    closeCellModal: (state) => {
      state.isCellModalOpen = false;
      state.disabledBtn = false;
    },
    setActivePlayer: (state) => {
      const currentActivePlayerIndex = state.players.findIndex(
        (player) => player.isActive === true
      );

      let nextPlayerIndex =
        currentActivePlayerIndex + 1 >= state.players.length
          ? 0
          : currentActivePlayerIndex + 1;

      let skipRoundCount = 0;
      while (skipRoundCount < state.players.length) {
        if (state.players[nextPlayerIndex].skipRound === false) {
          break;
        }
        state.players[nextPlayerIndex].skipRound = false;
        skipRoundCount++;
        nextPlayerIndex =
          nextPlayerIndex + 1 >= state.players.length ? 0 : nextPlayerIndex + 1;
      }

      state.players = state.players.map((player, index) => ({
        ...player,
        isActive: index === nextPlayerIndex,
      }));
    },
    setPosition: (state, action: PayloadAction<Array<Player>>) => {
      state.disabledBtn = true;
      const updatedPlayer = action.payload[0];
      const currentPlayerIndex = state.players.findIndex(
        (player) => player.id === updatedPlayer.id
      );

      state.players = state.players.map((player, index) => {
        if (index === currentPlayerIndex) {
          return {
            ...player,
            position: updatedPlayer.position > 30 ? 30 : updatedPlayer.position,
          };
        }
        return player;
      });
      state.isCellModalOpen = true;
    },
    setUpdatedPlayers: (state, action: PayloadAction<Array<Player>>) => {
      state.players = action.payload;
    },
  },
});

export const { actions: settingsActions } = settingsSlice;

export const { reducer: settingsReducer } = settingsSlice;
