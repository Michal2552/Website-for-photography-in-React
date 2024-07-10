import { configureStore } from '@reduxjs/toolkit';
import notificationsReducer from './notificationsSlice';
import messageSlice from './slices/messageSlice';
import tasksSlice from './tasksSlice';

const store = configureStore({
  reducer: {
    notifications: notificationsReducer,
    message: messageSlice,
    tasks: tasksSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
