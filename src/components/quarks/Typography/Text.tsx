import { createElement, FC, memo } from 'react';

import { IText } from './type';

let Text: FC<IText> = ({ as = "p", children, ...props }: IText) =>
  createElement(as,
  {
    ...props,
    role: `${props.role ?? 'typography'}`,
    className: `typography typography-${as} ${props.className ?? ''}`,
  }, 
  children
);

Text = memo(Text);

export default Text;
