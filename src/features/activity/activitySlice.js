import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    items: [
        {
            id: "activity-1",
            type: "system",
            title: "The project has been launched",
            entityType: "system",
            description: "TaskFlow CRM is ready to go.",
            entityId: null,
            createdAt: "2026-06-05 10:00"
        },
    ]
};

const activitySlice = createSlice({
    name="activity",

    initialState,

    reducers: {
        addActivity: {
            reducer(state, action) {
                state.items.unshift(action.payload);
            },

            prepare{
                const now = new Date();

                return {
                    payload: {
                        id: nanoid(),
                        createdAt: now.toLocaleString("ru-RU", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                    }),
            ...activity
          }
            }
        }
    }
})