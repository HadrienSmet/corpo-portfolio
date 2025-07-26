export type JobItem = {
    readonly company: string;
    readonly descriptionsAmount: number;
    readonly id: string;
    readonly period: {
        readonly end?: string;
        readonly start: string;
    };
    readonly stacks: Array<string>;
    readonly title: string;
};
export const JOBS: Array<JobItem> = [
    {
        company: "Reach Up",
        id: "reachup",
        descriptionsAmount: 3,
        period: {
            start: "31/10/2023",
        },
        stacks: ["React", "React-Native", "TypeScript", "NodeJS", "AWS"],
        title: "Front-end developper",
    },
];
