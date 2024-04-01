import type { RootState } from 'src/1app/providers/storeProvider/config/store';

export const getDieOption = (state: RootState) => state.settingsSlice.die;
