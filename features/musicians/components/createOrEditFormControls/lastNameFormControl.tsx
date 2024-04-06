import React from 'react'
import TextInputFormControl from "@/features/common/components/createOrEditFormControls/textInputFormControl";

interface LastNameFormControlProps {
  defaultValue: string
}

function LastNameFormControl({defaultValue}: LastNameFormControlProps) {
  return (
    <TextInputFormControl defaultValue="" name="lastName" label="Nom"/>
  )
}

export default LastNameFormControl
