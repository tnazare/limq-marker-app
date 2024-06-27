import React from 'react'
import TextInputFormControl from "@/features/common/components/createOrEditFormControls/textInputFormControl";

interface LabelFormControlProps {
  defaultValue: string
}

function LabelFormControl({defaultValue}: LabelFormControlProps) {
  return (
    <TextInputFormControl defaultValue={defaultValue} name="label" label="Libellé"/>
  )
}

export default LabelFormControl
