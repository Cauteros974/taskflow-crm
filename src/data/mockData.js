export const statuses = [
    "New", 
    "In process", 
    "Under review", 
    "Completed"
];

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
    {
        id: "client-4",
        name: "Dany Kowal",
        email: "d.kowal@example.com",
        phone: "+123 77 356 10 99",
        company: "Kowal Bio",
        status: "Potential",
        createdAt: "2026-01-10"
    },
    {
        id: "client-5",
        name: "Lusy Broud",
        email: "l.broud@example.com",
        phone: "+123 77 356 10 99",
        company: "Broud Found",
        status: "Active",
        createdAt: "2026-12-12"
    },
    {
        id: "client-6",
        name: "Bob Mario",
        email: "b.mario@example.com",
        phone: "+123 77 356 10 99",
        company: "Mario Corp",
        status: "Potential",
        createdAt: "2019-2-12"
    },
    {
        id: "client-7",
        name: "Marry Kielman",
        email: "m.kieal@example.com",
        phone: "+123 77 356 10 99",
        company: "MK Tech",
        status: "Active",
        createdAt: "2010-04-23"
    },
    {
        id: "client-8",
        name: "David Colmun",
        email: "d.colm@example.com",
        phone: "+123 77 356 10 99",
        company: "Colmun Food",
        status: "Active",
        createdAt: "2008-08-30"
    },
    {
        id: "client-9",
        name: "Anna Voolly",
        email: "a.voolly@example.com",
        phone: "+123 77 356 10 99",
        company: "A.V. Corp",
        status: "Potential",
        createdAt: "1999-10-12"
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
        assigneeId: "member-1",
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
        assigneeId: "member-2",
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
        dueDate: "2026-06-12",
        assigneeId: "member-3"
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
        assigneeId: "member-4",
        coments:[]
    }
];

export const mockTeam = [
    {
        id: "member-1",
        name: "David",
        role: "Project Manager",
        email: "david@taskflow.dev",
        capacity: 5,
        assigneeId: "member-1"
    },
    {
        id: "member-2",
        name: "Anna",
        role: "UI/UX Designer",
        email: "anna@taskflow.dev",
        capacity: 4,
        assigneeId: "member-2"
    },
    {
        id: "member-3",
        name: "Daniel",
        role: "Frontend Developer",
        email: "daniel@taskflow.dev",
        capacity: 5,
        assigneeId: "member-3"
    }
]