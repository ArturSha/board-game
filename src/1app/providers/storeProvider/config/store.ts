import { configureStore } from '@reduxjs/toolkit';
import counterSlice from 'src/5entities/TestCounter/counterSlice';

export const store = configureStore({
  reducer: {
    counterSlice: counterSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
