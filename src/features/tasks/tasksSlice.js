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
                        comments: [],
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
            const task = state.items.find((item) => item.id === action.payload.id);

            if(task) {
                task.status = action.payload.status;
            }
        },

        addTaskComment: {
            reducer() {
                const task = state.items.find(
                    (items) => items.id === action.payload.taskId
                );

                if(task) {
                    if (!task.comments) {
                        task.comments = [];
                    }

                    task.comments.unshift(action.payload.comments);
                }
            }
        },

        setTaskFilter(state, action) {
            state.filters = {
                ...state.filters,
                ...action.payload
            };
        },

        resetTaskFilters(state) {
            state.filters = {
                search: "",
                status: "All",
                priority: "All"
            };
        }
    }
});

export const {
    addTask,
    updateTask,
    deleteTask,
    changeTaskStatus,
    setTaskFilter,
    resetTaskFilters
} = tasksSlice.actions;

export default tasksSlice.reducer;