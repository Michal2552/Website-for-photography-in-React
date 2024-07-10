import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TaskDetails } from '../Models/TaskDetails.model';

interface TasksState {
  tasks: TaskDetails[];
}

const initialState: TasksState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskDetails>) => {
      state.tasks.push(action.payload);
    },
    updateTask: (state, action: PayloadAction<TaskDetails>) => {
      const index = state.tasks.findIndex(task => task.payment === action.payload.payment);
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((task, index) => index !== action.payload);
    },
    setTasks: (state, action: PayloadAction<TaskDetails[]>) => {
      state.tasks = action.payload;
    },
  },
});

export const { addTask, updateTask, deleteTask, setTasks } = tasksSlice.actions;
export default tasksSlice.reducer;
