import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducer ({
    task: taskReducer,
    clients: clientsReducer,
});

const loadState = () => {
    try{
        const savedState = localStorage.getItem("taskflow");
        return savedState = JSON.parse(savedState) ; undefined;
    } catch {
        return undefined;
    }
};