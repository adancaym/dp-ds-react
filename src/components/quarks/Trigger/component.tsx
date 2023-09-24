import { createElement, memo } from 'react';

import { ITrigger } from './type';

export const Trigger: React.FC<ITrigger> = ({ children, ...props }) => 
createElement("button", 
{
  ...props,
  role: 'button',
  className: `trigger ${props.className}`,
},
children);

let Component = Trigger

Component = memo(Component);

export default Component;
