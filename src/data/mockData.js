export const statuses = ["New", "In process", "Under review", "Completed"];

export const priorities = ["Low", "Medium", "High", "Critical"];

export const projectStatuses = ["Planning", "In Progress", "Pause", "Completed"];

export const mockClients = [
    {
        id: "client-1",
        name: "Anna Koval",
        email: "anna.kovel@example.com",
        phone: "+123 12 345 67 89",
        company: "Koval Studio",
        status: "Active",
        createdAt: "2026-05-11"
    },
    {
        id: "client-2",
        name: "Dmitry Lenss",
        email: "d.lenss@example.com",
        phone: "+123 32 222 90 65",
        company: "Lenss Logistics",
        status: "Potential",
        createdAt: "2026-05-18"
    },
    {
        id: "client-3",
        name: "Edward Nolon",
        email: "e.nolon@example.com",
        phone: "+123 77 356 10 99",
        company: "Nolon Tech",
        status: "Active",
        createdAt: "2026-05-22"
    },
];

export const mockProjects = [
    {
        id: "project-1",
        title: "Website Redesign",
        clientId: "client-1",
        description: "Homepage update, responsive layout, and basic analytics.",
        startDate: "2026-05-12",
        deadline: "2026-06-30",
        status: "In Progress",
        progress: 45
    },
    {
        id: "project-2",
        title: "CRM for applications",
        clientId: "client-2",
        description: "Mini CRM for processing incoming requests and monitoring statuses.",
        startDate: "2026-05-20",
        deadline: "2026-07-18",
        status: "Planning",
        progress: 20
    }
];

export const mockTasks = [
    {
        id: "task-1",
        title: "Collect dashboard requirements",  // fixed typo
        description: "Refine the required metrics and prepare a list of widgets",
        status: "Completed",
        priority: "Medium",
        clientId: "client-1",
        dueDate: "2026-05-25",
        projectId: "project-1",
        comments: [
            {
                id: "commnet-1",
                author: "Test-1",
                text: "The requirements are collected, we can move on to design.",
                createdAt: "19.06.2026, 10:15"
            }
        ]
    },
    {
        id: "task-2",
        title: "Design statistics cards",  // fixed typo
        description: "Prepare the UI for the cards for the main page",
        status: "In Progress",
        priority: "High",
        projectId: "project-2",
        clientId: "client-1",
        dueDate: "2026-06-08",
        comments: []
    },
    {
        id: "task-3",
        title: "Configure task table",
        description: "Add search, filters, and sorting by deadline.",
        status: "Under review",
        priority: "High",
        projectId: "project-3",
        clientId: "client-2",
        dueDate: "2026-06-12"
    },
    {
        id: "task-4",
        title: "Create a Client Page",
        description: "Client list, cards, adding and deleting",
        status: "New",
        priority: "Medium",
        projectId: "project-4",
        clientId: "client-2",
        dueDate: "2026-06-19",
        coments:[]
    }
];

export const mockTeam = [
    {
        id: "member-1",
        name: "David",
        role: "Project Manager",
        email: "david@taskflow.dev",
        capacity: 5
    },
    {
        id: "member-2",
        name: "Anna",
        role: "UI/UX Designer",
        email: "anna@taskflow.dev",
        capacity: 4
    },
    {
        id: "member-3",
        name: "Daniel",
        role: "Frontend Developer",
        email: "daniel@taskflow.dev",
        capacity: 5
    }
]