import { CSSProperties } from 'react';
import { IComponent } from 'src/types';

import { INavigationItem } from './INavigationItem';
import { IPositionVariant } from './IPositionVariant';

export interface ISecionProps extends IComponent{
  children?: INavigationItem[];
  styles?: CSSProperties;
  linkStyle?: CSSProperties;
  position?: IPositionVariant;
}
