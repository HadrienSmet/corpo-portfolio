import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import "./sectionJobs.scss";

type JobItem = {
    readonly company: string;
    readonly descriptionsAmount: number;
    readonly id: string;
    readonly period: {
        start: string;
        end?: string;
    };
    readonly stacks: Array<string>;
    readonly title: string;
};
const JOBS: Array<JobItem> = [
    {
        company: "Reach Up",
        id: "reachup",
        descriptionsAmount: 3,
        period: {
            start: "31/10/2023",
        },
        title: "Front-end developper",
        stacks: ["React", "React-Native", "TypeScript", "NodeJS", "AWS"],
    },
];
const JobCard = (props: JobItem) => {
    const { t } = useTranslation();
    const descriptions = useMemo(() => {
        const output: Array<string> = [];

        for (let i = 0; i <= props.descriptionsAmount; i++) {
            const description = t(`experiences.${props.id}.descriptions.${i}`);

            output.push(description);
        }

        return (output);
    }, [t])

    return (
        <div className="job-card">
            <div className="job-card__header">
                <div className="job-card__company">
                    <div className="job-card__company-logo">
                        <img
                            src={`/images/${props.id}/${props.id}-logo.webp`}
                            alt={`Logo ${props.company}`}
                        />
                    </div>
                    <p>{props.company}</p>
                </div>
                <p>{props.period.start} to {props.period.end ?? "now"}</p>

            </div>
            <div className="job-card__content">
                <h3>{t(`experiences.${props.id}.title`)}</h3>
                <em>{props.stacks.join(", ")}.</em>
                <div className="job-card__descriptions">
                    {descriptions.map((description, index) => <p key={`${props.id}-${index}`}>{description}</p>)}
                </div>
            </div>
        </div>
    );
};
export const SectionJobs = () => {
    const { t } = useTranslation();

    return (
        <section className="section-experiences">
            <h2>{t("experiences.title")}</h2>
            <div className="experiences-container">
                {JOBS.map(job => <JobCard key={job.company} {...job} />)}
            </div>
            <p>{t("experiences.future")}</p>
        </section>
    );
};
