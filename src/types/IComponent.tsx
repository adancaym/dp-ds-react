import { type AriaRole } from 'react'

export interface IComponent {
  id?: string
  className?: string
  role?: AriaRole | undefined
  'data-testid'?: string | number
  disabled?: boolean
}
