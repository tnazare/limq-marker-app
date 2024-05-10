import React from 'react'

interface PersonTypeFormControlProps {
  defaultValue: string
}

function PersonTypeFormControl({defaultValue}: PersonTypeFormControlProps) {
  return (
    <input type="hidden" name="type" value={defaultValue}/>
  )
}

export default PersonTypeFormControl
