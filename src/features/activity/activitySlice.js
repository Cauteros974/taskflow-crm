import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    items: [
        {
            id: "activity",
            type: "system",
            title: "The project has been launched",
            entityType: "system",
        }
    ]
}