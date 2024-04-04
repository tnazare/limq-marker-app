import React from 'react'
import Link from 'next/link'
import {Button} from "@/features/common/components/shadcn-ui/button";

function CreateNewMusicianButton() {
  return (
    <Button asChild>
      <Link href="/musicians/create" className='w-1/6 text-gray-800 bg-gray-300'>Ajouter un musicien</Link>
    </Button>

  )
}
export default CreateNewMusicianButton
