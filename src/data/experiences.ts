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
export const EXPERIENCE_TYPE = {
    past: "past",
    future: "future",
} as const;
type PastExperience = {
    type: typeof EXPERIENCE_TYPE["past"];
    item: JobItem;
};
type FutureExperience = {
    type: typeof EXPERIENCE_TYPE["future"];
    item: { readonly i18nKey: string };
};
export type Experience =
    | PastExperience
    | FutureExperience
export const JOBS: Array<Experience> = [
    {
        item: {
            company: "Reach Up",
            id: "reachup",
            descriptionsAmount: 3,
            period: {
                start: "31/10/2023",
            },
            stacks: ["React", "React-Native", "TypeScript", "NodeJS", "AWS"],
            title: "Front-end developper",
        },
        type: EXPERIENCE_TYPE.past,
    },
    {
        item: {
            i18nKey: "experiences.future",
        },
        type: EXPERIENCE_TYPE.future,
    },
];
