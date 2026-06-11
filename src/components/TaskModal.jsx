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
import { status, priorities} from "../data/mockData";

const emptyTask = {
    title="",
    description="",
    status="New",
    priority: "Middle",
    projectId: "",
    clientId: "",
    dueDate: dayjs().add(7, "day").format("YYYY-MM-DD")
}

export default function TaskModal({open, close}){

    const clients = useSelector((state) => state.clients.items);
    const projects = useSelector((state) => state.projects.items);

    const [form, setForm] = useState(emptyTask);

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
                        onChange={(event) => updateField("status", value)}
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
                        value={}
                        onChange={(clientName)}
                        option={["Not selected", ...clients.map((client) => client)]}
                    />
                    
                 </div>
            </DialogContent>
        </Dialog>
    )
}