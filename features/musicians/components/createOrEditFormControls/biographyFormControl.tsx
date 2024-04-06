import React from 'react'
import TextInputFormControl from "@/features/common/components/createOrEditFormControls/textInputFormControl";

interface BiographyFormControlProps {
  defaultValue: string
}


function BiographyFormControl({defaultValue}: BiographyFormControlProps) {
  return (
    <TextInputFormControl defaultValue="" name="biography" label="Biographie"/>
  )
}

export default BiographyFormControl
