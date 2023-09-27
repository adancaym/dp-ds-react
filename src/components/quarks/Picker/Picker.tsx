import { FC } from "react";
import { IPicker } from "./type";


const Picker: FC<IPicker> = ({ options, ...props }) => {

    const className = `picker ${props.className || ''}`;
    const role = props.role ?? 'picker';

    return (
        <select {...props} role={role} className={className}>
            {options.map((option, index) => (
                <option role='option' key={index} value={option.value}>{option.label}</option>
            ))}
        </select>
    );
}
export default Picker;
