import { createElement, ElementType, memo } from 'react';
import { IOnChangeArg, IOnChangeFunction, ITypeDataInput } from 'src/types';

import { IReaderProps } from './type';

let Reader: ElementType = <T extends ITypeDataInput = string>({ onChange, ...props}: IReaderProps<T>) => {

  const _onChange: IOnChangeFunction = (e: IOnChangeArg) => {
    if (!onChange) return;

    const { target: { value }  } = e;

    let newValue: ITypeDataInput = value;

    if (newValue === null) newValue = undefined;

    onChange(newValue as T);
  };

  return createElement("input", 
  {
    ...props,
    type: props.type ?? "text",
    role:  props.role ?? "input",
    className: `input input-${props.type ?? 'text'} ${props.className ?? ''}`,
    onChange: _onChange 
  }
  );
};

Reader = memo(Reader);

export default Reader;
