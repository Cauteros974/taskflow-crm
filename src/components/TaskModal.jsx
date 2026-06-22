import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from "@mui/material";
import { DatePicker } from "antd";
import dayjs from "dayjs";

import HeadlessSelect from "./HeadlessSelect";
import { statuses, priorities} from "../data/mockData";

const emptyTask = {
    title: "",
    description: "",
    status: "New",
    priority: "Medium",
    projectId: "",
    clientId: "",
    assigneeId: "",
    dueDate: dayjs().add(7, "day").format("YYYY-MM-DD")
}

export default function TaskModal({ open, onClose, onSubmit, task }) {

    const clients = useSelector((state) => state.clients.items);
    const projects = useSelector((state) => state.projects.items);

    const [form, setForm] = useState(emptyTask);

    const team = useSelector((state) => state.team.items);

    useEffect(() => {
        setForm(task || emptyTask);
    }, [task, open]);

    const updateField = (field, value) => {
        setForm((prev) => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = () => {
        if (!form.title.trim()) return;
        
        onSubmit(form);
        onClose();
    };

    return(
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>
                {task? "Edit task": "New task"}
            </DialogTitle>

            <DialogContent className="modal-content">
                <TextField 
                    label="Name"
                    value={form.title}
                    onChange={(event) => updateField("title", event.target.value)}
                    fullWidth
                />

                <TextField
                    label="Description"
                    value={form.description}
                    onChange={(event) => updateField("description", event.target.value)}
                    fullWidth
                    multiline
                    minRows={3}
                />

                 <div className="form-grid">
                    <HeadlessSelect
                        label="Status"
                        value={form.status}
                        onChange={(value) => updateField("status", value)}
                        options={statuses}
                    />

                    <HeadlessSelect
                        label="Priority"
                        value={form.priority}
                        onChange={(value) => updateField("priority", value)}
                        options={priorities}
                    />
                 </div>

                 <div>
                    <HeadlessSelect
                        label="Client"
                        value={
                            clients.find((client) => client.id === form.clientId)?.name ||
                            "Not selected"
                        }
                        onChange={(clientName) => {
                            const client = clients.find((item) => item.name === clientName);
                            updateField("clientId", client?.id || "");
                        }}
                        options={["Not selected", ...clients.map((client) => client.name)]}
                    />

                    <HeadlessSelect 
                        label="Project"
                        value={
                            projects.find((project) => project.id === form.projectId)
                            ?.title || "Not selected"
                        }
                        onChange={(projectTitle) => {
                            const project = projects.find(
                                (item) => item.title === projectTitle
                            );
                            updateField("projectId", project?.id || "");
                        }}
                        options={[
                            "Not Selected",
                            ...projects.map((project) => project.title)
                        ]}
                    />

                    <HeadlessSelect 
                        label="Assignee"
                        value={
                            team.find((member) => member.id === form.assigneeId)?.name ||
                            "Not selected"
                        }
                        onChange={(memberName) => {
                            const member = team.find(
                                (item) => item.name === memberName
                            );

                            updateField("assigneeId", member?.id || "");
                        }}
                        options={[
                             "Not selected",
                             ...team.map((member) => member.name)
                        ]}
                    />
                 </div>

                 <div>
                    <span className="select-label">Deadline</span>

                    <DatePicker>
                        <Button onClick={onClose}>Cancel</Button>

                        <Button variant="contained" onClick={handleSubmit}>Save</Button>
                    </DatePicker>                    
                 </div>
            </DialogContent>
        </Dialog>
    );
}