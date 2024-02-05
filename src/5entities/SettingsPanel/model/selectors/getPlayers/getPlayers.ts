import type { RootState } from 'src/1app/providers/storeProvider/config/store';

export const getPlayers = (state: RootState) => state.settingsSlice.players;
