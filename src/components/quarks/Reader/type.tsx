import { type ChangeEvent, type DetailedHTMLProps, type HTMLAttributes, type HTMLInputTypeAttribute } from 'react'
import { type IComponent } from 'src/types'

interface TypeReader extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {}
export interface IReaderProps extends IComponent, TypeReader {
  value?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  type?: HTMLInputTypeAttribute
};
