import React from 'react'
import DatePickerFormControl from "@/features/seasons/components/createOrEditFormControls/datePickerFormControl";
import LabelFormControl from "@/features/seasons/components/createOrEditFormControls/labelFormControl";
import SubmitButton from './createOrEditFormControls/submitButton'
import TeamNameFormControl from "@/features/seasonTeams/components/createOrEditFormControls/teamNameFormControl";
import TeamColorPickerFormControl
  from "@/features/seasonTeams/components/createOrEditFormControls/teamColorPickerFormControl";

interface CreateSeasonTeamFormProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

function CreateSeasonTeamForm({handleSubmit}: CreateSeasonTeamFormProps) {
  return (
    <>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <TeamNameFormControl defaultValue=""/>
        <TeamColorPickerFormControl />
        <SubmitButton/>
      </form>
    </>
  )
}

export default CreateSeasonTeamForm
