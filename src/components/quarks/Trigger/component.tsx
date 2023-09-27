import { memo } from 'react';

import { ITrigger } from './type';

let Trigger: React.FC<ITrigger> = (props) => {
  const role = props.role ?? `button`
  const className = `trigger ${props.className ?? ''}`
  return <button {...props} className={className} role={role}/>
}


Trigger = memo(Trigger);

export default Trigger;