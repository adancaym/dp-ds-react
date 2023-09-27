import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IComponent } from "src/types";


interface IOption {
    value: string;
    label: string;
}

export interface IPicker extends IComponent, DetailedHTMLProps<HTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
    options: IOption[];
 }
