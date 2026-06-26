import { configureStore, combineReducers } from "@reduxjs/toolkit";

import tasksReducer from "../features/tasks/tasksSlice.js";
import clientsReducer from "../features/clients/clientsSlice.js";
import projectsReducer from "../features/projects/projectsSlice.js";
import activityReducer from "../features/activity/activitySlice.js";
import teamReducer from "../features/team/teamSlice.js";

// Combine all the application's reducers into a single rootReducer.
// Each key here will become a separate part of the global Redux state.
const rootReducer = combineReducers({
  tasks: tasksReducer,
  clients: clientsReducer,
  projects: projectsReducer,
  team: teamReducer,
  activity: activityReducer
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
  
  team: store.getState().team
};

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadState()
});

store.subscribe(() => {
  saveState({
    tasks: store.getState().tasks,
    clients: store.getState().clients,
    projects: store.getState().projects,
    activity: store.getState().activity
  });
});