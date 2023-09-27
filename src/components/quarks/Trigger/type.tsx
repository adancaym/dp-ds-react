import React from 'react';
import { IComponent } from 'src/types';

import { IWithChildren, IWithStyle } from '../../hoc';

interface TypeTrigger extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{}

export interface ITrigger extends 
    TypeTrigger ,
    IComponent, 
    IWithStyle, 
    IWithChildren { }

    
