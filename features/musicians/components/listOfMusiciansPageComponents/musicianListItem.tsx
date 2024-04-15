import React from 'react'
import Link from 'next/link'
import {TableCell, TableRow} from "@/features/common/components/shadcn-ui/table";
import type {MusicianPayload} from '@/features/musicians/prismaPayloads/musicianPayload'

interface MusicianListItemProps {
  musician: MusicianPayload,
  deleteHandler: (id: string) => void
}

function MusicianListItem({musician, deleteHandler}: MusicianListItemProps) {
  return (
    <TableRow className='flex-1 m-1 p-2 even:bg-gray-50 odd:bg-white'>
      <TableCell className='border'>
        #{musician.musicianNumber}
      </TableCell>
      <TableCell className='border'>
        {musician.lastName} {musician.firstName}
      </TableCell>
      <TableCell className='border'>
        {musician.shortDescription}
      </TableCell>
      <TableCell className='border'>
        <Link href={`/musicians/edit/${musician.id}`}
              className='p-2 m-2 text-white bg-blue-500 rounded'>Modifier</Link>
        <button className='p-2 m-2 text-white bg-red-500 rounded'
                onClick={() => deleteHandler(musician.id)}>Supprimer
        </button>
      </TableCell>
    </TableRow>
  )
}

export default MusicianListItem
