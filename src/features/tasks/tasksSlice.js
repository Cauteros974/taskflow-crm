import { createSlice, nanoid } from "@reduxjs/toolkit";
import { mockTasks } from "../../data/mockData";

const initialState = {
    items: mockTasks,
    filters: {
        search: "",
        status: "All",
        priority: "All"
    }
};

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    
})