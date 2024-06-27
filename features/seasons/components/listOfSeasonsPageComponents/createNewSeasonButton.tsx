import React from 'react'
import Link from 'next/link'
import {Button} from "@/features/common/components/shadcn-ui/button";

function CreateNewSeasonButton() {
  return (
    <Button asChild className='w-2/6 text-gray-800 bg-gray-300 border-gray-800'>
      <Link href="/seasons/create">Ajouter une saison</Link>
    </Button>

  )
}

export default CreateNewSeasonButton
