import type { RootState } from 'src/1app/providers/storeProvider/config/store';

export const getIsCellModalOpen = (state: RootState) =>
  state.settingsSlice.isCellModalOpen;
