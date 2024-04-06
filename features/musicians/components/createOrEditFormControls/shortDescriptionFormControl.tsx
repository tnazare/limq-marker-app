import React from 'react'
import TextInputFormControl from "@/features/common/components/createOrEditFormControls/textInputFormControl";

interface ShortDescriptionFormControlProps {
  defaultValue: string
}

function ShortDescriptionFormControl({defaultValue}: ShortDescriptionFormControlProps) {
  return (
    <TextInputFormControl defaultValue="" name="shortDescription" label="Courte description"/>
  )
}

export default ShortDescriptionFormControl
