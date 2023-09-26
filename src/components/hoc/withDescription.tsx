import { createElement } from 'react';
import { Container, Typography } from 'src/components';
import { IComponent } from 'src/types';

import { IWithDescriptionProps } from './types/IWithDescriptionProps';

export const withDescription =
  <T extends IComponent>({
    Component,
    description,
    style,
  }: IWithDescriptionProps<T>) =>
  (props: T) => createElement(
    Container,
    null,
    createElement(Component, props),
    description && createElement(Typography, {style}, description)
  )
