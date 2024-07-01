import React from 'react'
import TextInputFormControl from "@/features/common/components/createOrEditFormControls/textInputFormControl";

interface LabelFormControlProps {
  defaultValue: string
}

function TeamNameFormControl({defaultValue}: LabelFormControlProps) {
  return (
    <TextInputFormControl defaultValue={defaultValue} name="teamName" label="Nom d'équipe"/>
  )
}

export default TeamNameFormControl
