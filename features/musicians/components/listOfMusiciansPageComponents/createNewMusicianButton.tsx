import React from 'react'
import Link from 'next/link'
import {Button} from "@/features/common/components/shadcn-ui/button";

function CreateNewMusicianButton() {
  return (
    <Button asChild className='w-2/6 text-gray-800 bg-gray-300 border-gray-800'>
      <Link href="/musicians/create">Ajouter un
        musicien</Link>
    </Button>

  )
}

export default CreateNewMusicianButton
