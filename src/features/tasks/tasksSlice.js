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
    reducers: {
        addTask: {
            reducer(state, action){
                state.items.unshift(action.payload);
            },
            prepare(task) {
                return{
                    payload: {
                        id: nanoid(),
                        ...task
                    }
                };
            }
        },

        updateTask(state, action) {
            const index = state.items.findIndex(
                (task) => task.id === action.payload.id
            );

            if (index !== -1) {
                state.items[index] = {
                    ...state.items[index],
                    ...action.payload
                };
            }
        },

        deleteTask(state, action) {
            state.items = state.items.filter((task) => task.id !== action.payload);
        },

        changeTaskStatus(state, action) {
            const task = state.items.find((item) => item.id)
        }
    }
})