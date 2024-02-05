import { configureStore } from '@reduxjs/toolkit';
import { settingsReducer } from 'src/5entities/SettingsPanel';

export const store = configureStore({
  reducer: {
    settingsSlice: settingsReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
