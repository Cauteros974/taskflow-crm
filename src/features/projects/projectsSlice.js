import { createSlice, nanoid } from "@reduxjs/toolkit";
import { mockProjects } from "../../data/mockData";
import { updateClient } from "../clients/clientsSlice";

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
                project => project.id === action.payload.id
            )
        }
    }
});

export default projectsSlice.reducer;