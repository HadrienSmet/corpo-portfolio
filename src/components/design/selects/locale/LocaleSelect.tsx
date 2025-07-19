import { ChangeEvent, useMemo } from "react";

import { useLocale } from "@/hooks";
import { SUPPORTED_LANGUAGES } from "@/i18n/translations";

import { Select } from "../core";

type LocaleSelectProps = {
    readonly onBackground?: boolean;
}
export const LocaleSelect = ({ onBackground = false }: LocaleSelectProps) => {
    const { locale, setLocale } = useLocale();

    const onChange = (event: ChangeEvent<HTMLSelectElement>) => setLocale(event.target.value);
    const options = useMemo(() => Object.keys(SUPPORTED_LANGUAGES).map(lang => ({ value: lang, label: lang.toUpperCase() })), [SUPPORTED_LANGUAGES])

    return (
        <Select
            defaultValue={locale}
            name="locale"
            onBackground={onBackground}
            onChange={onChange}
            options={options}
        />
    );
};
