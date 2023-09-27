import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IComponent } from 'src/types';

import { IWithChildren, IWithStyle } from '../../hoc';

export interface TypeContainer extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}


export interface IContainer extends 
TypeContainer,
IComponent, 
IWithStyle, 
IWithChildren {
    
}

