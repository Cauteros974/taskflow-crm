import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, CardContent, Grid, TextField, Typography } from "@mui/material";
import { Form, Input, Modal, Popconfirm, Select } from "antd";
import AddIcon from "@mui/icons-material/Add";

import PageTitle from "../components/PageTitle";
import StatusBadge from "../components/StatusBadge";

import {
  addClient,
  deleteClient,
  updateClient
} from "../features/clients/clientsSlice.js";

export default function ClientPage() {
    const dispatch = useDispatch();

    const clients = useSelector((state) => state.clients.items);

    const [search, setSearch] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const [editingClient, setEditingClient] = useState(null);

    const [form] = Form.useForm();

    const filterClietns = clients.filter((clients) => {
        const value = `${client.name} ${client.company} ${client.email}`.toLowerCase();

        return value.includes(search.toLowerCase());
    });

    const openCreateModal = () => {
        setEditingClient(nul);
        form.resetFields();
        setModalOpen(true);
    };

    const openEditModal = (client) => {
        setEditingClient(client);
        form.setFieldsValue(client);
        setModalOpen(true);
    };

    const handleSubmit = async () => {
        const values = await form.validateFields();

        if(editingClient) {
            dispatch (
                updateClient({
                    ...values,
                    id: editingClient.id
                })
            );
        } else {
            dispatch(addClient(values));
        }

        setModalOpen(false);
    }
}