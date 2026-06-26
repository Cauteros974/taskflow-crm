import { createSlice, nanoid } from "@reduxjs/toolkit";
import { mockClients } from "../../data/mockData";

const clientsSlice = createSlice({
    name: "clients",

    initialState: {
        items: mockClients
    },

    reducers: {
        addClient: {
            reducer(state, action) {
                state.items.unshift(action.payload);
            },
            prepare(client) {
                return {
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

            if (index !== -1) {
                state.items[index] = {
                    ...state.items[index],
                    ...action.payload
                };
            }
        },

        deleteClient(state, action) {
            state.items = state.items.filter(
                (client) => client.id !== action.payload
            );
        }
    }
});

export const { addClient, updateClient, deleteClient } = clientsSlice.actions;

export default clientsSlice.reducer;