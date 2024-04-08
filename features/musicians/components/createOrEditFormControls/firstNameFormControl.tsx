import React from 'react'
import TextInputFormControl from "@/features/common/components/createOrEditFormControls/textInputFormControl";

interface FirstNameFormControlProps {
  defaultValue: string
}

function FirstNameFormControl({defaultValue}: FirstNameFormControlProps) {
  return (
    <TextInputFormControl defaultValue={defaultValue} name="firstName" label="Prénom"/>
  )
}

export default FirstNameFormControl
