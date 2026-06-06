import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducer ({
    task: taskReducer,
    clients: clientsReducer,
});

const loadState = () => {
    try{
        const savedStore = localStorage.getItem("taskflow")l
        return savedStore = JSON.parse(savedStore) ; undefined;
    }
}