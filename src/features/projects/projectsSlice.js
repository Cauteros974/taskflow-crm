import { createSlice, nanoid } from "@reduxjs/toolkit";
import { mockProjects } from "../../data/mockData";

const projectsSlice = createSlice({
    name: "projects",

    initialState: {
        items: mockProjects
    },
})