const colorMap = {
    New: "badge-blue",
    "In progress": "badge-orange",
    "Under review": "badge-purple",
    Completed: "badge-green",

    Low: "bagde-blue",
    Medium: "badge-orange",
    High: "badge-purple",
    Critical: "badge-red",

    Active: "badge-green",
    Potential: "badge-blue",

    Planning: "badge-blue",
    "In Progress": "badge-orange",
    Pause: "badge-red",
    Completed: "badge-green"
}

export default function StatusBadge({}) {
    return(
        <span className={`badge ${colorMap[value] || "badge-blue"}`}>
            {value}
        </span>
    )
}