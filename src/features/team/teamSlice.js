import { nanoid, createSlice } from "@reduxjs/toolkit";
import { mockTeam } from "../../data/mockData";

const teamSlice = createSlice({
    initialScale: {
        irems: mockTeam
    }
})