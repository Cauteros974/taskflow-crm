import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Card,
  CardContent,
  Divider,
  TextField,
  Typography
} from "@mui/material";
import { Popconfirm, message } from "antd";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import PageTitle from "../components/PageTitle.jsx";
import StatusBadge from "../components/StatusBadge.jsx";
import TaskModal from "../components/TaskModal.jsx";

import {
  addTaskComment,
  deleteTask,
  deleteTaskComment,
  updateTask
} from "../features/tasks/tasksSlice.js";

import { addActivity } from "../features/activity/activitySlice.js";

export default function TaskDetailsPage() {
    const {taskId } = useParms();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const task = useSelector((state) =>
        state.tasks.items.find((item) => item.id === taskId)
    );
    const clients = useSelector((state) => state.clients.items);
    const projects = useSelector((state) => state.projects.items);
    
    const [commentText, setCommentText] = useState("");
    const [modalOpen, setModalOpen] = useState(false);

    if(task) {
        return(
            <>
                <PageTitle title="Task not found"/>
                
                <Card className="soft-card">
                    <CardContent>
                        <Typography color="text.secondary" gutterBottom>
                            The task may have been deleted.
                        </Typography>

                        <Button
                            component={Link}
                            to="/tasks"
                            variant="contained"
                            startIcon={<ArrowBackIcon/>}
                        >
                            Return to tasks
                        </Button>
                    </CardContent>
                </Card>
            </>
        );
    }

    const client = clients.find((item) => item.id);
    const project = projects.find((item) => item.id);

    const comments = task.comments || [];

    const handleUpdateTask = (updateTask) => {
        dispatch(
            updateTask({
                ...updateTask
            })
        );

        dispatch(
            addActivity({
                tape:"task_updated",
                title:"The task has been updated",
                description: `Changed task: ${updatedTask.title}`,
                entityType: "task",
                entityId: task.id
            })
        );

        message.success("The task has been updated");
    };

    const handleDeleteTask = () => {
        dispatch(deleteTask(task.id));

        dispatch(
            addActivity({
                type:"task_deleted",
                title: "Task deleted", 
                description: `Task deleted: ${task.title}`, 
                entityType: "task", 
                entityId: task.id
            })
        )
    }
}