import { useDispatch, useSelector } from "react-redux";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Popconfirm } from "antd";

import PageTitle from "../components/PageTitle.jsx";
import { clearActivity } from "../features/activity/activitySlice.js";

const typeLabels = {
  task_created: "Creation",
  task_updated: "Update",
  task_deleted: "Delete",
  comment_added: "Comment",
  comment_deleted: "Comment",
  status_changed: "Status",
  system: "System"
};

export default function ActivityPage() {
  const dispatch = useDispatch();

  const activity = useSelector((state) => state.activity.items);

  return (
    <>
      <PageTitle
        title="Action History"
        subtitle="All important events in the app"
        action={
          <Popconfirm
            title="Clear history?"
            okText="Yes"
            cancelText="No"
            onConfirm={() => dispatch(clearActivity())}
          >
            <Button color="error" variant="outlined">
              Clear history
            </Button>
          </Popconfirm>
        }
      />

      <Card className="soft-card">
        <CardContent>
          <div className="activity-list">
            {activity.length ? (
              activity.map((item) => (
                <div className="activity-item" key={item.id}>
                  <div className="activity-marker" />

                  <div className="activity-content">
                    <div className="activity-top">
                      <Typography fontWeight={900}>{item.title}</Typography>
                    </div>

                    <Typography color="text.secondary">
                      {item.description}
                    </Typography>

                    <div className="activity-bottom">

                      {item.entityType === "task" && item.entityId && (
                        <Link to={`/tasks/${item.entityId}`}>
                          Open task
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <Typography color="text.secondary">
                The action history is still empty.
              </Typography>
            )}
          </div>
        </CardContent>
      </Card>
    </>
  );
}