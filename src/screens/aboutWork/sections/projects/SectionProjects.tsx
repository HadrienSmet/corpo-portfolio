import { useTranslation } from "react-i18next";

export const SectionProjects = () => {
    const { t } = useTranslation();

    return (
        <section className="projects">
            <h2>{t("projects.title")}</h2>
        </section>
    );
};
