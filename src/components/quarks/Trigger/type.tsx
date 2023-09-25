import { IComponent } from 'src/types';

import { IWithChildren, IWithOnClick, IWithStyle } from '../../hoc';

export interface ITrigger extends 
    IComponent, 
    IWithStyle, 
    IWithChildren, 
    IWithOnClick { }
