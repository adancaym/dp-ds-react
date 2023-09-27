import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IComponent } from "src/types";

export interface IPicker extends IComponent, DetailedHTMLProps<HTMLAttributes<HTMLSelectElement>, HTMLSelectElement> { }
