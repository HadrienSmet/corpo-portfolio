import { ChangeEventHandler, CSSProperties } from "react";

import { ExpandMore } from "@/assets";
import { useCssVariable } from "@/hooks";

import "./select.scss";

type SelectOption = {
    readonly value: string;
    readonly label: string;
};
type SelectProps = {
    readonly className?: string;
    readonly value?: string;
    readonly disabled?: boolean;
    readonly id?: string;
    readonly name: string;
    readonly onBackground?: boolean
    readonly options: Array<SelectOption>;
    readonly style?: CSSProperties;

    readonly onChange: ChangeEventHandler<HTMLSelectElement>;
};
export const Select = ({ onBackground = false, ...props }: SelectProps) => {
    const onBgColor = useCssVariable("--clr-txt-onBg");

    const iconColor = onBackground
        ? onBgColor
        : undefined;

    return (
        <div className="select-container">
            <select
                className={`${props.className ?? ""} ${onBackground ? "on-background" : ""} input`}
                defaultValue={props.value}
                value={props.value}
                disabled={props.disabled ?? false}
                id={props.id}
                name={props.name}
                onChange={props.onChange}
                style={props.style}
            >
                {props.options.map((option, index) => (
                    <option
                        key={`${option.value}-${index}`}
                        value={option.value}
                    >
                        {option.label}
                    </option>
                ))}
            </select>
            <ExpandMore color={iconColor} />
        </div>
    );
};
