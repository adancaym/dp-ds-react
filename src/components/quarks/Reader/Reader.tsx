import { type FC, memo } from 'react'

import { type IReaderProps } from './type'

let Reader: FC<IReaderProps> = (props: IReaderProps) => {
  const { type = 'text', role = 'input', onChange = (_) => {} } = props

  const className = `input input-${props.type ?? 'text'} ${props.className ?? ''}`

  return (
    <input
      {...props}
      type={type}
      role={role}
      className={className}
      onChange={onChange}
    />
  )
}

Reader = memo(Reader)

export default Reader
