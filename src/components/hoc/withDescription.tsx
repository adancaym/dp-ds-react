import { Typography, withStyle } from 'src/components';
import { IComponent } from 'src/types';

import { IWithDescriptionProps } from './types/IWithDescriptionProps';


export const withDescription = <T extends IComponent>({ Component, description, style }: IWithDescriptionProps<T>) => (props: T) =>  {
    const Description = withStyle({Component: Typography, style})

    return <>
      <Component {...props} />
      <Description className='description'>{description}</Description>
    </>
  }
