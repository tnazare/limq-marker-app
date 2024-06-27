import React from 'react'
import DatePickerFormControl from "@/features/seasons/components/createOrEditFormControls/datePickerFormControl";
import LabelFormControl from "@/features/seasons/components/createOrEditFormControls/labelFormControl";
import SubmitButton from './createOrEditFormControls/submitButton'

interface CreateSeasonFormProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

function CreateSeasonForm({handleSubmit}: CreateSeasonFormProps) {
  return (
    <>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <LabelFormControl defaultValue=""/>
        <DatePickerFormControl defaultValue={new Date()}/>
        <SubmitButton/>
      </form>
    </>
  )
}

export default CreateSeasonForm
