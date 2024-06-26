import React from 'react'
import BiographyFormControl from "@/features/musicians/components/createOrEditFormControls/biographyFormControl";
import FirstNameFormControl from '@/features/musicians/components/createOrEditFormControls/firstNameFormControl'
import LastNameFormControl from '@/features/musicians/components/createOrEditFormControls/lastNameFormControl'
import MusicianNumberFormControl
  from "@/features/musicians/components/createOrEditFormControls/musicianNumberFormControl";
import PersonTypeFormControl
  from "@/features/musicians/components/createOrEditFormControls/personTypeHiddenFormControl";
import ShortDescriptionFormControl
  from "@/features/musicians/components/createOrEditFormControls/shortDescriptionFormControl";
import SubmitButton from './createOrEditFormControls/submitButton'

interface CreateMusicianFormProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

function CreateMusicianForm({handleSubmit}: CreateMusicianFormProps) {
  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <PersonTypeFormControl defaultValue="MUSICIAN"/>
      <FirstNameFormControl defaultValue=""/>
      <LastNameFormControl defaultValue=""/>
      <ShortDescriptionFormControl defaultValue=""/>
      <BiographyFormControl defaultValue=""/>
      <MusicianNumberFormControl defaultValue={0}/>
      <SubmitButton/>
    </form>
  )
}

export default CreateMusicianForm
