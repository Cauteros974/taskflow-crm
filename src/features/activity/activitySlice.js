import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: "activity-1",
      type: "system",
      title: "Проект запущен",
      description: "TaskFlow CRM готов к работе.",
      entityType: "system",
      entityId: null,
      createdAt: "2026-06-05 10:00"
    }
  ]
};

const activitySlice = createSlice({
  name: "activity",

  initialState,

  reducers: {
    addActivity: {
      reducer(state, action) {
        state.items.unshift(action.payload);
      },

      prepare(activity) {
        const now = new Date();

        return {
          payload: {
            id: nanoid(),
            createdAt: now.toLocaleString("ru-RU", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit"
            }),
            ...activity
          }
        };
      }
    },

    clearActivity(state) {
      state.items = [];
    }
  }
});

export const { addActivity, clearActivity } = activitySlice.actions;

export default activitySlice.reducer;