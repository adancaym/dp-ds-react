import { createElement, ElementType, memo } from 'react';

import { IOnChangeArg, IOnChangeFunction, ITypeData } from '../types';
import { IReaderProps } from './type';




let Component: ElementType = <T extends ITypeData = string>({ onChange, ...props}: IReaderProps<T>) => {

  const _onChange: IOnChangeFunction = (e: IOnChangeArg) => {
    if (!onChange) return;

    const { target: { value }  } = e;

    let newValue: ITypeData = value;

    if (newValue === null) newValue = undefined;

    onChange(newValue as T);
  };

  return createElement("input", 
  {
    ...props,
    role:  props.role ?? "input",
    className: `input input-${props.type} ${props.className ?? ''}`,
    onChange: _onChange 
  }
  );
};

Component = memo(Component);

export default Component;
