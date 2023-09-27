import { FC } from "react";
import { IPicker } from "./type";


const Picker: FC<IPicker> = ({ children, ...props }) => {

    const className = `picker ${props.className || ''}`;
    const role = props.role ?? 'picker';


    return (
        <select {...props} role={role} className={className}>
            {children}
        </select>
    );
}
export default Picker;
