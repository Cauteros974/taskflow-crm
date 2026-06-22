import { createSlice, nanoid } from "@reduxjs/toolkit";
import { mockTeam } from "../../data/mockData.js";

const teamSlice = createSlice({
  name: "team",

  initialState: {
    items: mockTeam
  },

  reducers: {
    addTeamMember: {
      reducer(state, action) {
        state.items.push(action.payload);
      },

      prepare(member) {
        return {
          payload: {
            id: nanoid(),
            ...member,
            capacity: Number(member.capacity)
          }
        };
      }
    },

    updateTeamMember(state, action) {
      const index = state.items.findIndex(
        (member) => member.id === action.payload.id
      );

      if (index !== -1) {
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