import type { RootState } from 'src/1app/providers/storeProvider/config/store';

export const getDisabledBtn = (state: RootState) =>
  state.settingsSlice.disabledBtn;
