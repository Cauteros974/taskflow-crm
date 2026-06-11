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

export default function TaskModal(){
    return(
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>
                {task? "Edit task": "New task"}
            </DialogTitle>

            <DialogContent className="modal-content">
                <TextField 
                    label="Name"
                    value={form.title}
                />
            </DialogContent>
        </Dialog>
    )
}