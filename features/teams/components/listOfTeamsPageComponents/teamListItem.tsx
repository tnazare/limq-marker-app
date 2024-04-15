import React from 'react'
import Link from 'next/link'
import {TableCell, TableRow} from "@/features/common/components/shadcn-ui/table";
import type {TeamPayload} from "@/features/teams/prismaPayloads/teamPayload";

interface TeamListItemProps {
  team: TeamPayload,
  deleteHandler: (id: string) => void
}

function TeamListItem({team, deleteHandler}: TeamListItemProps) {
  return (
    <TableRow className='flex-1 m-1 p-2 even:bg-gray-50 odd:bg-white'>
      <TableCell className='border'>
        {team.name}
      </TableCell>
      <TableCell className='border'>
        {team.color}
      </TableCell>
      <TableCell className='border'>
        <ul>
          {team.members.map((member) => (<li>{member.firstName} {member.lastName}</li>))}
        </ul>
      </TableCell>
      <TableCell className='border'>
        <Link href={`/teams/edit/${team.id}`}
              className='p-2 m-2 text-white bg-blue-500 rounded'>Modifier</Link>
        <button className='p-2 m-2 text-white bg-red-500 rounded'
                onClick={() => deleteHandler(team.id)}>Supprimer
        </button>
      </TableCell>
    </TableRow>
  )
}

export default TeamListItem
