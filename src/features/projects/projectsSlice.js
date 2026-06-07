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
                }
            }
        }
    }
});

export const {addProject, updateProject} = projectsSlice.actions;

export default projectsSlice.reducer;