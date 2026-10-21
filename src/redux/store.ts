import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    counter: (state = 0) => state,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;