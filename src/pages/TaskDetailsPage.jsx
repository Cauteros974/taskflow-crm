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
        );

        message.success("Task deleted")
        navigate("/tasks");

        const handleAddComment = () => {
            const text = commentText.trim();

            if (!text) return;

            dispatch(
                addTaskComment({
                    taskId: task.id,
                    text
                })
            );

            dispatch(
                addActivity({
                    type: "comment_added",
                    title: "Comment added",
                    description: `Comment added to task: ${task.title}`,
                    entityType: "task",
                    entityId: task.id
                })
            );

            setCommentText("");
            message.success("Comment added");
        };

        const handleDeleteComment = (commentId) => {
            dispatch(
                deleteTaskComment({
                    tasId: task.id,
                    commentId
                })
            );
            dispatch(
                addActivity({
                    type:"comment_deleted",
                    title: "Comment removed",
                    description: `Comment removed in task: ${task.title}`,
                     entityType: "task",
                     entityId: task.id
                })
            );

            message.success("Comment deleted")
        };

        return(
            <>
                <PageTitle
                    title={task.title}
                    subtitle="Task Details Page"
                    action={
                        <Button
                            component={Link}
                            to="/tasks"
                            variant="outlined"
                            startIcon={<ArrowBackIcon />}
                        >
                            Back
                        </Button>
                    }
                />

                <div className="task-details-grid">
                    <Card className="soft-card">
                        <CardContent>
                            <div className="details-header">
                                <div>
                                    <Typography variant="h6" fontWeight={900}>
                                        Task information
                                    </Typography>

                                    <Typography>
                                        Basic data, client, project and deadline
                                    </Typography>
                                </div>

                                <div className="table-actions">
                                    <Button variant="contained" onClick={() => setModalOpen(true)}>
                                        Change
                                    </Button>

                                    <Popconfirm 
                                        title="Delete task?"
                                        onText="Yes"
                                        cancelText="No"
                                        onConfirm={handleDeleteTask}
                                    >
                                        <Button color="error">Delete</Button>
                                    </Popconfirm>
                                </div>
                            </div>

                            <Divider className="details-divider"/>

                            <Typography className="details-description">
                                {task.description || "Desctiprion missing"}
                            </Typography>

                            <div className="details-list">
                                <div>
                                    <span>Status</span>
                                    <StatusBadge value={task.status} />
                                </div>

                                <div>
                                    <span>Priority</span>
                                    <StatusBadge value={task.priority} />
                                </div>

                                <div>
                                    <span>Clinet</span>
                                    <strong>{client?.name || "Not selected"}</strong>
                                </div>

                                <div>
                                    <span>Project</span>
                                    <strong>{client?.name || "Not selected"}</strong>
                                </div>

                                <div>
                                    <span>Deadline</span>
                                    <strong>{client?.name || "Not selected"}</strong>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="soft-card">
                        <CardContent>
                            <Typography variant="h6" fontWeight={900} gutterBottom>
                                Comments
                            </Typography>

                            <div className="commnet">
                                <TextField
                                    label="Write a comment"
                                    value={commentText}
                                    onChange={(event) => setCommentText(event.target.value)}
                                    multiline
                                    minRows={3}
                                    fullWidth
                                />

                                <Button variant="contained" onClick={handleAddComment}>
                                    Add a comment
                                </Button>
                            </div>

                            <Divider className="details-divider" />

                            <div className="comments-list">
                                {comments.length ? (
                                    comments.map((comment) => (
                                        <div className="comment-card" key={comment.id}>
                                            <div className="comment-header">
                                                <div>
                                                    <strong>{comment.author}</strong>
                                                    <span>{comment.createdAt}</span>
                                                </div>

                                                <Popconfirm
                                                    title="Delete comment?"
                                                    okText="Yes"
                                                    cancelText="No"
                                                    onConfirm={() => handleDeleteComment(comment.id)}
                                                >
                                                    <button className="comment-delete-button">
                                                        Delete
                                                    </button>
                                                </Popconfirm>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <Typography color="text.secondary">
                                        There are no comments yet.
                                    </Typography>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <TaskModal 
                    open={modalOpen}
                    onClose={() => setModalOpen(false)}
                    onSubmit={handleUpdateTask}
                    task={task}
                />
            </>
        )
    }
}