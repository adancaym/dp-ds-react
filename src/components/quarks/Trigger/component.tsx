import { createElement, memo } from 'react';

import { ITrigger } from './type';

let Trigger: React.FC<ITrigger> = ({ children, ...props }) => 
createElement("button", 
{
  ...props,
  role: props.role ?? 'button',
  className: `trigger ${props.className ?? ''}`,
},
children);


Trigger = memo(Trigger);

export default Trigger;