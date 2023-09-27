import { FC } from "react";
import { Picker, withDescription, withError, withLabel, withStyle } from "src/components";
import { ISelect } from "./type";
import { useTheme, MakeSelectTheme } from "src/theme";

const Select: FC<ISelect> = ({ label, error, description, ...props }) => {
    const {theme} = useTheme();

    const selectStyles = MakeSelectTheme(theme);

    let PickerSelect = Picker;


    PickerSelect = withStyle({
        Component: PickerSelect,
        style: selectStyles.select,
    });

    if (label) PickerSelect = withLabel({
        Component: PickerSelect,
        label,
        style: selectStyles.label,
    });

    if (error) PickerSelect = withError({
        Component: PickerSelect,
        error,
        style: selectStyles.error,
    });

    if (description) PickerSelect = withDescription({
        Component: PickerSelect,
        description,
        style: selectStyles.description,
    });

    return <PickerSelect {...props} />
}

export default Select;
