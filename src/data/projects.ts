type ProjectResource = {
    readonly id: string;
    readonly url: string;
};
export type ProjectType = {
    readonly comingSoonSegments?: number;
    readonly descriptionsSegments: number;
    readonly id: string;
    readonly imageLink: string;
    readonly images: Array<ProjectResource>;
    readonly links: {
        readonly client: string;
        readonly prod: string;
        readonly server?: string;
    };
    readonly period: string;
    readonly tools: string[];
    readonly videos?: Array<ProjectResource>;
};
export const ONLINE_PROJECTS: Record<string, ProjectType> = {
    tinyclip: {
        descriptionsSegments: 2,
        id: "tinyclip",
        images: [
            {
                url: "tinyclip.webp",
                id: "home",
            },
            {
                url: "tinyclip-snakepage.webp",
                id: "snake",
            },
            {
                url: "tinyclip-pongpage.webp",
                id: "pong",
            },
            {
                url: "tinyclip-tetrispage.webp",
                id: "tetris",
            },
            {
                url: "tinyclip-flappypage.webp",
                id: "flappy",
            },
        ],
        imageLink: "tinyclip-square.webp",
        links: {
            client: "https://github.com/HadrienSmet/Tinyclip",
            prod: "https://hs-tinyclip.netlify.app/",
        },
        period: "2023/04",
        tools: ["Sass", "React", "TypeScript"],
    },
    gartic: {
        descriptionsSegments: 3,
        id: "gartic",
        images: [
            {
                id: "home",
                url: "cloned-home-page.webp",
            },
            {
                id: "room",
                url: "cloned-room-page.webp"
            },
            {
                id: "drawing",
                url: "cloned-canvas-page.webp",
            },
            {
                id: "results",
                url: "cloned-results-page.webp",
            },
        ],
        imageLink: "cloned-square.webp",
        links: {
            client: "https://github.com/HadrienSmet/gartic-clone",
            prod: "https://hs-gartic-clone.netlify.app",
            server:  "https://github.com/HadrienSmet/gartic-clone-server",
        },
        period: "2023/04",
        tools: ["NextJS", "React", "TypeScript", "Socket.IO", "NodeJS"],
    },
    leonorapp: {
        comingSoonSegments: 4,
        descriptionsSegments: 3,
        id: "leonorapp",
        imageLink: "leonor-app_0.webp",
        images: [
            {
                url: "leonor-app_0.webp",
                id: "folders",
            },
            {
                url: "leonor-app_1.webp",
                id: "vocabulary",
            },
        ],
        links: {
            client: "https://github.com/HadrienSmet/interpetors_monorepo.git",
            prod: "https://leonor-app.netlify.app/"
        },
        period: "2025/07",
        tools: ["React", "TypeScript", "NestJS"],
        videos: [
            {
                id: "customisable",
                url: "U58zIAd8eVw",
            },
            {
                id: "interractivity",
                url: "C7wPqRiJ_i0",
            },
            {
                id: "historic",
                url: "vM0fLCzJHAM",
            },
            {
                id: "vocabularyOverview",
                url: "ILsG4Eqq6XM",
            },
            {
                id: "vocabularyFilters",
                url: "PwY8aHPmQ7s"
            },
        ]
    }
};
