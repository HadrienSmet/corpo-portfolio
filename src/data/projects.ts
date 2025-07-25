type ProjectImage = {
    readonly alt: string;
    readonly url: string;
};
export type ProjectVideo = {
    readonly description: string;
    readonly title: string;
    readonly url: string;
};
export type ProjectType = {
    readonly comingSoon?: Array<string>;
    readonly descriptions: Array<string>;
    readonly id: string;
    readonly imageLink: string;
    readonly images?: Array<ProjectImage>;
    readonly links: {
        readonly client: string;
        readonly prod: string;
        readonly server?: string;
    };
    readonly name: string;
    readonly period: string;
    readonly tools: string[];
    readonly videos?: Array<ProjectVideo>;
};
export const ONLINE_PROJECTS: Record<string, ProjectType> = {
    tinyclip: {
        descriptions: [
            "In order to improve my skills in programming I coded a few small games. And I created a website to gather them. I called it tinyclip in memory of the website called miniclip wich stole a lot of hours to my youth.",
            "This website is only available on desktop version for now. Even if the home page is responsive, you can not play yet with your phone or tablet!",
        ],
        id: "tinyclip",
        images: [
            {
                url: "tinyclip.webp",
                alt: "Home Page",
            },
            {
                url: "tinyclip-snakepage.webp",
                alt: "Snake",
            },
            {
                url: "tinyclip-pongpage.webp",
                alt: "Pong",
            },
            {
                url: "tinyclip-tetrispage.webp",
                alt: "Tetris",
            },
            {
                url: "tinyclip-flappypage.webp",
                alt: "Flappy Bird",
            },
        ],
        imageLink: "tinyclip-square.webp",
        links: {
            client: "https://github.com/HadrienSmet/Tinyclip",
            prod: "https://hs-tinyclip.netlify.app/",
        },
        name: "Tinyclip - Third project on my own (the second is the portfolio)",
        period: "2023/04",
        tools: ["Sass", "React", "TypeScript"],
    },
    gartic: {
        descriptions: [
            "I created this project to deepen my understanding of WebSockets and explore how real-time interactions work on the web. I chose to clone the well-known game Gartic Phone, as it presented a fun and technically challenging opportunity to push my limits while working with professional-grade design references.",
            "This project was a great way to improve my skills in handling real-time data, multiplayer logic, and game state synchronization. The application is fully responsive, though gameplay currently requires a mouse for drawing interactions. At this stage, there is one drawing tool and a single game mode available."
        ],
        id: "gartic",
        images: [
            {
                alt: "Home Page",
                url: "cloned-home-page.webp",
            },
            {
                alt: "Room Page",
                url: "cloned-room-page.webp"
            },
            {
                alt: "Game page (drawing round)",
                url: "cloned-canvas-page.webp",
            },
            {
                alt: "Results Page",
                url: "cloned-results-page.webp",
            },
        ],
        imageLink: "cloned-square.webp",
        links: {
            client: "https://github.com/HadrienSmet/gartic-clone",
            prod: "https://hs-gartic-clone.netlify.app",
            server:  "https://github.com/HadrienSmet/gartic-clone-server",
        },
        name: "Cloned Gartic Phone - Fourth project on my own",
        period: "2023/04",
        tools: ["NextJS", "React", "TypeScript", "Socket.IO", "NodeJS"],
    },
    leonorapp: {
        comingSoon: [
            "Soon, Leonor's App will take interpreter preparation to the next level with AI-driven insights. By processing meeting files through advanced language models, this platform will automatically extract key concepts, technical terms, speaker lists, and relevant sources.",
            "This will help interpreters save time and focus on what matters. From these AI-generated insights, Leonor's App will enrich preparations by automatically retrieving multilingual translations, speaker images, and contextual resources.",
            "All preparation sessions, vocabulary terms, and essential notes will be saved and organized in a personal knowledge base—making it easy for interpreters to reuse their work and build expertise over time.",
            "This is the next step in creating a smart, adaptive preparation environment where interpreters gain both efficiency and deep understanding."
        ],
        descriptions: [
            "(Only the client available) Leonor's App is a productivity platform designed to help interpreters prepare for meetings with focus and clarity.",
            "Users create custom workspaces with multilingual support and personalized color codes to enhance memorization and document navigation. The platform lets interpreters upload meeting files, annotate PDFs (highlight, underline, draw), and turn texts into interactive resources by creating linked notes or adding terms to a multilingual vocabulary table. All interactive elements are cross-referenced for seamless navigation.",
            "With a clean, customizable interface—dark/light themes, resizable columns, and draggable sections—Leonor's App adapts to each interpreter's workflow, creating a preparation space that's both flexible and efficient.",
        ],
        id: "leonorapp",
        imageLink: "leonor-app_0.png",
        images: [
            {
                url: "leonor-app_0.png",
                alt: "Meeting preparation folders screen",
            },
            {
                url: "leonor-app_1.png",
                alt: "Meeting preparation vocabulary screen",
            },
        ],
        links: {
            client: "https://github.com/HadrienSmet/interpetors_monorepo.git",
            prod: "https://leonor-app.netlify.app/"
        },
        name: "Leonor's App",
        period: "2025/07",
        tools: ["React", "TypeScript", "NestJS"],
        videos: [
            {
                description: "Leonor's App is a customisable workspace including dark and light theming, redimensionable columns and draggable sections",
                title: "Customisable workspace",
                url: "U58zIAd8eVw",
            },
            {
                description: "Allowing the users to update their meeting files and to create interactive notes based on text selection",
                title: "File Update and text interactivity",
                url: "C7wPqRiJ_i0",
            },
            {
                description: "Leonor's App files editor includes an actions historic to allow to remove an unwanted modification",
                title: "Actions historic",
                url: "vM0fLCzJHAM",
            },
            {
                description: "Pushing text selection in vocabulary table and allowing to download the vocabulary table as a stylized excell file",
                title: "Interactive vocabulary that you can download",
                url: "ILsG4Eqq6XM",
            },
            {
                description: "Sorting and searching in the generated vocabulary",
                title: "Search and sort in vocabulary",
                url: "PwY8aHPmQ7s"
            },
        ]
    }
};
