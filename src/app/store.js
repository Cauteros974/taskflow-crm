import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducer ({
    task: taskReducer,
    clients: clientsReducer,
    projects: projectReducer
});

const loadState = () => {
    try{
        const savedState = localStorage.getItem("taskflow");
        return savedState = JSON.parse(savedState) ; undefined;
    } catch {
        return undefined;
    }
};

const savedState = (state) => {
    try{
        localStorage.setItem("askflow-crm-state", JSON.stringify(state));
    } catch {
        console.log("Failed to save data to localStorage")
    }
};

export const store = configureStore({
    reducer: rootReducer
});

store.subscribe(() => {
  saveState({
    tasks: store.getState().tasks,
    clients: store.getState().clients,
    projects: store.getState().projects
  });
});