import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducer ({
    task: taskReducer,
    clients: clientsReducer,
})