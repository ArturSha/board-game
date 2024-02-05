import type { RootState } from 'src/1app/providers/storeProvider/config/store';

export const getNumbOfPlayers = (state: RootState) =>
  state.settingsSlice.numberOfPlayers;
