import { type IWith, type IWithError, type IWithStyle, Text, withStyle } from 'src/components'
import { type IComponent } from 'src/types'

type IWithErrorProps<T> = IWith<T> & IWithStyle & IWithError

export const withError = <T extends IComponent>({ Component, error, style }: IWithErrorProps<T>) => (props: T) => {
  const ErrorMessage = withStyle({ Component: Text, style })

  return (
      <>
        <Component {...props} />
        { error && <ErrorMessage className='error'>{error}</ErrorMessage> }
      </>
  )
}
