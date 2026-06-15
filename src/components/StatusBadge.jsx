const colorMap = {
    New: "badge-blue",
    "In Progress": "badge-orange",
    "Under review": "badge-purple",
    Completed: "badge-green",

    Low: "badge-blue",
    Medium: "badge-orange",
    High: "badge-purple",
    Critical: "badge-red",

    Active: "badge-green",
    Potential: "badge-blue",

    Planning: "badge-blue",
    Pause: "badge-red",
};

export default function StatusBadge({ value }) {
    return (
        <span className={`badge ${colorMap[value] || "badge-blue"}`}>
            {value}
        </span>
    );
}