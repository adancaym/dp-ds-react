import { FC } from "react";
import { Picker, withDescription, withError, withLabel, withStyle } from "src/components";
import { ISelect } from "./type";

const Select: FC<ISelect> = ({ style, label, error, description, ...props }) => {
    let PickerSelect = Picker;

    if (style) PickerSelect = withStyle({
        Component: PickerSelect,
        style
    });

    if (label) PickerSelect = withLabel({
        Component: PickerSelect,
        label,
    });

    if (error) PickerSelect = withError({
        Component: PickerSelect,
        error,
    });

    if (description) PickerSelect = withDescription({
        Component: PickerSelect,
        description,
    });

    return <PickerSelect {...props} />
}

export default Select;