import React from 'react'
import BiographyFormControl from "@/features/musicians/components/createOrEditFormControls/biographyFormControl";
import FirstNameFormControl from "@/features/musicians/components/createOrEditFormControls/firstNameFormControl";
import IdFormControl from '@/features/musicians/components/createOrEditFormControls/idFormControl'
import LastNameFormControl from "@/features/musicians/components/createOrEditFormControls/lastNameFormControl";
import ShortDescriptionFormControl
  from "@/features/musicians/components/createOrEditFormControls/shortDescriptionFormControl";
import SubmitButton from '@/features/musicians/components/createOrEditFormControls/submitButton'
import MusicianNumberFormControl
  from "@/features/musicians/components/createOrEditFormControls/musicianNumberFormControl";

interface EditMusicianFormProps {
  defaultValues: {
    id: string,
    firstName: string,
    lastName: string,
    shortDescription: string,
    biography: string,
    musicianNumber: number
  },
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}
function EditMusicianForm({ defaultValues, handleSubmit }: EditMusicianFormProps) {
  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <IdFormControl defaultValue={defaultValues.id}/>
      <FirstNameFormControl defaultValue={defaultValues.firstName} />
      <LastNameFormControl defaultValue={defaultValues.lastName} />
      <ShortDescriptionFormControl defaultValue={defaultValues.shortDescription} />
      <BiographyFormControl defaultValue={defaultValues.biography} />
      <MusicianNumberFormControl defaultValue={defaultValues.musicianNumber} />
      <SubmitButton />
    </form>
  )
}
export default EditMusicianForm
