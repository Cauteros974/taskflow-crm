import { createSlice, nanoid } from "@reduxjs/toolkit";
import { mockClients } from "../../data/mockData.js";
import { updateTask } from "../tasks/tasksSlice.js";

const clientsSlice = createState({
    name: "clients",

    initialState: {
        items: mockClients
    },

    reducers: {
        addClients: {
            reducer(state, action) {
                state.items.unshift(action.payload);
            },
            prepare(clietnt) {
                return{
                    payload: {
                        id: nanoid(),
                        createdAt: new Date().toISOString().slice(0, 10),
                        ...client
                    }
                };
            }
        },

        updateClient(state, action) {
            const index = state.items.findIndex(
                (client) => client.id === action.payload.id
            );

            if(index !== -1) {
                state.items[index] = {
                    ...state.items[index],
                    ...action.payload
                };
            }
        }
    }
});

export const {addClients, updateClient} = clientsSlice.action;

export default clientsSlice.reducer;