import { configureStore, combineReducers } from "@reduxjs/toolkit";

import tasksReducer from "../features/tasks/tasksSlice.js";
import clientsReducer from "../features/clients/clientsSlice.js";
import projectsReducer from "../features/projects/projectsSlice.js";

const rootReducer = combineReducers({
  tasks: tasksReducer,
  clients: clientsReducer,
  projects: projectsReducer
});

const loadState = () => {
  try {
    const savedState = localStorage.getItem("taskflow-crm-state");
    return savedState ? JSON.parse(savedState) : undefined;
  } catch {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    localStorage.setItem("taskflow-crm-state", JSON.stringify(state));
  } catch {
    console.log("Failed to save data to localStorage");
  }
};

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadState()
});

store.subscribe(() => {
  saveState({
    tasks: store.getState().tasks,
    clients: store.getState().clients,
    projects: store.getState().projects
  });
});