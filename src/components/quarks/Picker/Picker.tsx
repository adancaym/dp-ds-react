import { type FC } from 'react'
import { type IPicker } from './type'
import { v4 } from 'uuid'

const Picker: FC<IPicker> = ({ options, ...props }) => {
  const className = `picker ${props.className ?? ''}`
  const role = props.role ?? 'picker'

  return (
        <select {...props} role={role} className={className}>
            {options.map((option) => (
                <option
                  role='option'
                  key={`${option.label}-${option.value}-${v4()}`}
                  value={option.value} >
                    {option.label}
                </option>
            ))}
        </select>
  )
}
export default Picker
