import { ChangeEvent, DetailedHTMLProps, HTMLAttributes, HTMLInputTypeAttribute } from 'react';
import { IComponent } from 'src/types';

interface TypeReader extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>,HTMLInputElement> {}
export interface IReaderProps extends IComponent, TypeReader  {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: HTMLInputTypeAttribute;
};
