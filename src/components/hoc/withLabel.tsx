import { IWith, IWithLabel, IWithStyle, Typography, withStyle } from 'src/components';
import { IComponent } from 'src/types';

type IWithLabelProps<T> = IWith<T> & IWithStyle & IWithLabel;

export const withLabel = <T extends IComponent>({ Component, style, label }: IWithLabelProps<T>) => (props: T) => {
    const Label = withStyle({Component: Typography, style})

    return <>
      { label && <Label as='label' className='label'>{label}</Label> }
      <Component {...props} />
    </>
  }