import { createElement, FC, memo } from 'react';

import { ITypography } from './type';

let Typography: FC<ITypography> = ({ as = "p", children, ...props }: ITypography) =>
  createElement(as,
  {
    ...props,
    role: `${props.role ?? 'typography'}`,
    className: `typography typography-${as} ${props.className ?? ''}`,
  }, 
  children
);

Typography = memo(Typography);

export default Typography;
