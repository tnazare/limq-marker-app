import React from 'react'
import {TableCell, TableRow} from "@/features/common/components/shadcn-ui/table";
import type {SeasonTeamPayload} from "@/features/seasonTeams/prismaPayloads/seasonTeamPayload";
import Link from "next/link";

interface SeasonTeamListItemProps {
  seasonId: string;
  seasonTeam: SeasonTeamPayload,
  deleteHandler: (seasonId: string, seasonTeamId: string) => void
}

function SeasonTeamListItem({seasonId, seasonTeam, deleteHandler}: SeasonTeamListItemProps) {
  return (
      <TableRow className='flex-1 m-1 p-2 even:bg-gray-50 odd:bg-white'>
        <TableCell className='border'>
          {seasonTeam.name}
        </TableCell>
        <TableCell className='border'>
          {seasonTeam.color}
        </TableCell>
        <TableCell className='border'>
          <button className='p-2 m-2 text-white bg-red-500 rounded'
                  onClick={() => deleteHandler(seasonId, seasonTeam.id)}>Supprimer
          </button>
        </TableCell>
      </TableRow>
  )
}

export default SeasonTeamListItem