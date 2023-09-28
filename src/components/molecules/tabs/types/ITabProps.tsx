import { type ReactNode } from 'react'
import { type IComponent } from 'src/types'

export interface ITabProps extends IComponent {
  name: string
  label: string
  children: ReactNode
}
