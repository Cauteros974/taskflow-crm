import { nanoid, createSlice } from "@reduxjs/toolkit";
import { mockTeam } from "../../data/mockData";
import { addTask } from "../tasks/tasksSlice";

const teamSlice = createSlice({

    name: "team",

    initialScale: {
        items: mockTeam
    },

    reducers: {
        addTeamMember: {
            reducer (state, action) {
                state.items.push(action.payload)
            },

            prepare(team) {
                return{
                    payload: {
                        id: nanoid(),
                        ...member,
                        capacity: Number(member.capacity)
                    }
                };
            }
        },

        updateTeamMemeber(state, action) {
            const index = state.items.findIndex(
                (member) => member.id === action.payload.id
            );

            if(index !== 1) {
                state.items[index] = {
                    ...state.items[index],
                    ...action.payload,
                    capacity: Number(action.payload.capacity)
                };
            }
        },

        deleteTeamMember(state, action) {
            state.items = state.items.filter(
                (member) => member.id !== action.payload
            );
        }
    }
});

export const {
    addTeamMember,
    updateTeamMember,
    deleteTeamMember
} = teamSlice.actions;

export default teamSlice.reducer;