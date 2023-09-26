import { Container, Navigation, NavigationItem } from 'src/components';
import { IComponent } from 'src/types';

import { IWithNavigation } from './types';


export const withNavigation =
  <T extends IComponent>({ Component, routes }: IWithNavigation<T>) =>
  (props: T) =>
    (
      <Container>
        <Navigation router={routes}>
          {routes.map((route, index) => (
            <NavigationItem {...route} key={route.path + index} />
          ))}
        </Navigation>
        <Component {...props} />
      </Container>
    );

    