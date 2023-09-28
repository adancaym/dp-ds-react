import { type DetailedHTMLProps, type HTMLAttributes } from 'react'
import { type IComponent } from 'src/types'

interface IOption {
  value: string
  label: string
}

export interface IPicker extends IComponent, DetailedHTMLProps<HTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
  options: IOption[]
}
