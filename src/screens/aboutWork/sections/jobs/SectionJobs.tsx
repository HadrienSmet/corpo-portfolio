import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { useElementVisibility } from "@/hooks";
import { JobItem, JOBS } from "@/data";

import "./sectionJobs.scss";

const JobCard = (props: JobItem) => {
    const { elementRef } = useElementVisibility({});
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
        <div ref={elementRef} className="job-card">
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
    const { elementRef } = useElementVisibility({});
    const { t } = useTranslation();

    return (
        <section
            className="section-experiences"
            ref={elementRef}
        >
            <h2>{t("experiences.title")}</h2>
            <div className="experiences-container">
                {JOBS.map(job => <JobCard key={job.company} {...job} />)}
            </div>
            <p>{t("experiences.future")}</p>
        </section>
    );
};
