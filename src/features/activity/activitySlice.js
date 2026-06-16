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

    initialState
})