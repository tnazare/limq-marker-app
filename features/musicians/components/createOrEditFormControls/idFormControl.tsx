import React from 'react'
interface IdFormControlProps {
  defaultValue: string
}
function IdFormControl({ defaultValue }: IdFormControlProps) {
  return (
    <input type="hidden" name="id" value={defaultValue} />
  )
}
export default IdFormControl
