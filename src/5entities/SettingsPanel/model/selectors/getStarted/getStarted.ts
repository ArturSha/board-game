import type { RootState } from 'src/1app/providers/storeProvider/config/store';

export const getStarted = (state: RootState) => state.settingsSlice.started;
