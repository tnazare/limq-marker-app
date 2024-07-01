import React, {useState} from 'react'
import Link from 'next/link'
import {Button} from "@/features/common/components/shadcn-ui/button";
import {SeasonTeamPayload} from "@/features/seasonTeams/prismaPayloads/seasonTeamPayload";

interface CreateNewSeasonTeamButtonProps {
  seasonId: string
}

function CreateNewSeasonTeamButton(props: CreateNewSeasonTeamButtonProps) {
  return (
      <Button asChild className='w-2/6 text-gray-800 bg-gray-300 border-gray-800'>
        <Link href={`/seasons/${props.seasonId}/seasonTeams/create`}>Ajouter une équipe</Link>
      </Button>

  )
}

export default CreateNewSeasonTeamButton
