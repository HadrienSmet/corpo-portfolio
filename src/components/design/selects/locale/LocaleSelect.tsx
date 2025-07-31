import { ChangeEvent, useMemo } from "react";
import { useTranslation } from "react-i18next";

import { useLocale } from "@/contexts";
import { SUPPORTED_LANGUAGES } from "@/i18n/translations";

import { Select } from "../core";

type LocaleSelectProps = {
    readonly onBackground?: boolean;
};
export const LocaleSelect = ({ onBackground = false }: LocaleSelectProps) => {
    const { setLocale } = useLocale();
    const { i18n } = useTranslation();

    const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
        console.log({ onChange: event.target.value })
        setLocale(event.target.value)};
    const options = useMemo(() => (
        Object.keys(SUPPORTED_LANGUAGES).map(lang => ({ value: lang, label: lang.toUpperCase() }))
    ), [SUPPORTED_LANGUAGES]);

    return (
        <Select
            value={i18n.language}
            name="locale"
            onBackground={onBackground}
            onChange={onChange}
            options={options}
        />
    );
};
