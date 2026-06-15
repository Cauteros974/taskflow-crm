import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  DndContext,
  DragOverlay,
  PointerSensor,
  useDraggable,
  useDroppable,
  useSensor,
  useSensors
} from "@dnd-kit/core";

import { Card, CardContent, Typography } from "@mui/material";

import PageTitle from "../components/PageTitle";
import StatusBadge from "../components/StatusBadge";

import { changeTaskStatus } from "../features/tasks/tasksSlice";
import { statuses } from "../data/mockData";

export default function KanbanPage () {
    const dispatch = useDispatch();

    const tasks = useSelector((state) => state.tasks.items);

    const sensors = useSensors(useSensor(PointerSensor));

    const [activeTask, setActiveTask] = useState(null);

    const handleDragStart = (event) => {
        const task = tasks.find((item) => item.id === event.active.id);
        setActiveTask(task || null);
    };

    const handleDragEnd = (event) => {
        const {active, over} = event;

        if(active.id == over.id) {
            dispatch(
                changeTaskStatus({
                    id: active.id,
                })
            )
        }
    }
}