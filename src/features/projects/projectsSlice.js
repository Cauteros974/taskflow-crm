import { createSlice, nanoid } from "@reduxjs/toolkit";
import { mockProjects } from "../../data/mockData";


const projectsSlice = createSlice({
    name: "projects",

    initialState: {
        items: mockProjects
    },

    reducers: {
        addProject: {
            reducer(state, action) {
                state.items(action.payload)
            },
            prepare(project) {
                return{
                    payload: {
                        id: nanoid(),
                        ...project
                    }
                };
            }
        },

        updateProject(state, action) {
            const index = state.items.findIndex(
                (project) => project.id === action.payload.id
            );

            if(index !== -1) {
                state.items[index] = {
                    ...state.items[index],
                    ...action.payload,
                    progress: Number(
                        action.payload.progress ?? state.items[index].progress
                    )
                };
            }
        },

        deleteProject(state, action) {
            state.items = state.items.filter(
                (project) => project.id !== action.payload
            );
        }
    }
});

export const {addProject, updateProject, deleteProject} = projectsSlice.actions;

export default projectsSlice.reducer;