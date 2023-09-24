import { ElementType, memo, createElement } from "react";
import {
  ITypeData,
  IOnChangeArg,
  IOnChangeFunction,
  IReaderProps,
} from "../types";


let Component: ElementType = <T extends ITypeData = string>({
  onChange,
  ...props
}: IReaderProps<T>) => {
  const _onChange: IOnChangeFunction = (e: IOnChangeArg) => {
    if (!onChange) return;

    const {
      target: { value },
    } = e;

    let newValue: ITypeData = value;

    if (newValue === null) newValue = undefined;

    onChange(newValue as T);
  };

  return createElement("input", {
    ...props,
    role: 'input',
    className: props.className === 'input' ? '': props.className,
    onChange: _onChange });
};

Component = memo(Component);

export default Component;
