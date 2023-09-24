import { createElement, FC, memo } from 'react';

import { ITypography } from './type';

let Component: FC<ITypography> = ({ as = "p", children, ...props }: ITypography) =>
  createElement(as,
  {
    ...props,
    role: `${props.role ?? 'typography'}`,
    className: `typography typography-${as} ${props.className ?? ''}`,
  }, 
  children
);

Component = memo(Component);

export default Component;
