import React from 'react'
import {format} from 'date-fns';
import Link from 'next/link'
import {TableCell, TableRow} from "@/features/common/components/shadcn-ui/table";
import type {SeasonPayload} from "@/features/seasons/prismaPayloads/seasonPayload";

interface SeasonListItemProps {
  season: SeasonPayload,
  deleteHandler: (id: string) => void
}

function SeasonListItem({season, deleteHandler}: SeasonListItemProps) {
  return (
    <TableRow className='flex-1 m-1 p-2 even:bg-gray-50 odd:bg-white'>
      <TableCell className='border'>
        {season.label}
      </TableCell>
      <TableCell className='border'>
        {format(season.startDate, "PPP")}
      </TableCell>
      <TableCell className='border'>
        <Link href={`/seasons/edit/${season.id}`}
              className='p-2 m-2 text-white bg-blue-500 rounded'>Modifier</Link>
        <button className='p-2 m-2 text-white bg-red-500 rounded'
                onClick={() => deleteHandler(season.id)}>Supprimer
        </button>
      </TableCell>
    </TableRow>
  )
}

export default SeasonListItem
