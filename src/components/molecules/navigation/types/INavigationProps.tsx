import { RouteObject } from 'react-router-dom';
import { IComponent } from 'src/types';

import { INavigationItem } from './INavigationItem';

export interface INavigationProps extends IComponent{
  children?: INavigationItem[];
  router: RouteObject[];
}
