import { createSlice, nanoid } from "@reduxjs/toolkit";
import { mockClients } from "../../data/mockData.js";

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
                }
            }
        }
    }
});

export default clientsSlice.reducer;