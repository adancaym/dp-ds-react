import { type FC } from 'react'
import { Reader, withDescription, withError, withLabel, withStyle, withThemeContext } from 'src/components'
import { MakeInputTheme, useTheme } from 'src/theme'

import { type IInput } from './type'

const Input: FC<IInput> = ({ label, error, description, ...props }: IInput) => {
  const { theme } = useTheme()
  const inputStyle = MakeInputTheme(theme)

  let ReaderInput = withThemeContext({ Component: Reader })

  ReaderInput = withStyle({
    Component: ReaderInput,
    style: inputStyle.input
  })

  if (label) {
    ReaderInput = withLabel({
      Component: ReaderInput,
      label,
      style: inputStyle.label
    })
  }

  if (error) {
    ReaderInput = withError({
      Component: ReaderInput,
      error,
      style: inputStyle.error
    })
  }

  if (description) {
    ReaderInput = withDescription({
      Component: ReaderInput,
      description,
      style: inputStyle.description
    })
  }

  return <ReaderInput {...props} />
}

export default Input
