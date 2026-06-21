import { useDispatch, useSelector } from "react-redux";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Popconfirm } from "antd";

import PageTitle from "../components/PageTitle";
import { clearActivity } from "../features/activity/activitySlice";

const typeLabels = {
    task_created: "Creation",
    task_updated: "Update",
    task_deleted: "Delete",
}