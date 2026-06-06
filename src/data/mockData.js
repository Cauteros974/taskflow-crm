export const status = ["New", "In process", "Under review", "Completed"];

export const priorities = ["Low", "Middle", "Hight", "Critical"];

export const projectStatues = ["Planning", "In Progress", "Pause", "Completed"];

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
        description:
            "Homepage update, responsive layout, and basic analytics.",
        startDate: "2026-05-12",
        deadline: "2026-06-30",
        status: "In Progress",
        progress: 45
    },
    {
        id: "project-2",
        title: "CRM for applications",
        clientId: "client-2",
        description:
            "Mini CRM for processing incoming requests and monitoring statuses.",
        startDate: "2026-05-20",
        deadline: "2026-07-18",
        status: "Planning",
        progress: 20
    }
]