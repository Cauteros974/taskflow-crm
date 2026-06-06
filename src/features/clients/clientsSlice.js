import { createSlice, nanoid } from "@reduxjs/toolkit";
import { mockClients } from "../../data/mockData.js";

const clientsSlice = createState({
    name: "clients",

    initialState: {
        items: mockClients
    }
});

export default clientsSlice;