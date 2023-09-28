import { type CSSProperties } from 'react'

import { type IColorVariantButton } from './IVariantButton'

/**
 * Defines the interface for the Button Theme.
 * It extends the CSSProperties interface and adds a variant property of type IVariantButton.
 */
export interface IButtonTheme extends CSSProperties {
  /**
   * Defines the variant property for the Button Theme.
   * It is of type IVariantButton.
   */
  variant: IColorVariantButton
}
