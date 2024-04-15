import React from 'react'
import Link from 'next/link'
import {Button} from "@/features/common/components/shadcn-ui/button";

function CreateNewTeamButton() {
  return (
    <Button asChild className='w-2/6 text-gray-800 bg-gray-300 border-gray-800'>
      <Link href="/teams/create">Ajouter une équipe</Link>
    </Button>

  )
}

export default CreateNewTeamButton
