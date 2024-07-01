import React from 'react'
import TextInputFormControl from "@/features/common/components/createOrEditFormControls/textInputFormControl";

interface TeamFormControlProps {
  defaultValue: string
}

function TeamNameFormControl({defaultValue}: TeamFormControlProps) {
  return (
    <TextInputFormControl defaultValue={defaultValue} name="teamName" label="Nom d'équipe"/>
  )
}

export default TeamNameFormControl
