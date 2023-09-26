import { ReactNode } from 'react';
import { IComponent } from 'src/types';

export interface ITabProps extends IComponent {
  name: string;
  label: string;
  children: ReactNode;
}
