import { nanoid, createSlice } from "@reduxjs/toolkit";
import { mockTeam } from "../../data/mockData";
import { addTask } from "../tasks/tasksSlice";

const teamSlice = createSlice({
    initialScale: {
        items: mockTeam
    },

    reducers: (
        addTask: {
            reducer(state, action) {
                state.items.push(action.payload);
            }
        }
    )
})