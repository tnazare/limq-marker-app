import React from 'react'
import IdFormControl from '@/features/musicians/components/createOrEditFormControls/idFormControl'
import SubmitButton from '@/features/musicians/components/createOrEditFormControls/submitButton'
import DatePickerFormControl from "@/features/seasons/components/createOrEditFormControls/datePickerFormControl";
import LabelFormControl from "@/features/seasons/components/createOrEditFormControls/labelFormControl";

interface EditMusicianFormProps {
  defaultValues: {
    id: string,
    label: string,
    startDate: Date
  },
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

function EditSeasonForm({defaultValues, handleSubmit}: EditMusicianFormProps) {
  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <IdFormControl defaultValue={defaultValues.id}/>
      <LabelFormControl defaultValue={defaultValues.label}/>
      <DatePickerFormControl defaultValue={defaultValues.startDate}/>
      <SubmitButton/>
    </form>
  )
}

export default EditSeasonForm
