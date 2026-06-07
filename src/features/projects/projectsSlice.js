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
            prepare(projects) {
                return{
                    payload: {
                        id: nanoid()
                    }
                }
            }
        }
    }
});

export default projectsSlice.reducer;