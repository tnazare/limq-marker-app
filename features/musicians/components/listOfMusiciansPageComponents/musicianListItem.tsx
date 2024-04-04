import React from 'react'
import Link from 'next/link'
import type { MusicianPayload } from '@/features/musicians/prismaPayloads/musicianPayload'

interface MusicianListItemProps {
  musician: MusicianPayload,
  deleteHandler: (id: string) => void
}
function MusicianListItem({musician, deleteHandler}: MusicianListItemProps) {
  return (
    <div className='flex-1 m-1 p-2 bg-teal-400'>
      <div className='grid p-4 gap-2 grid-rows-2 bg-white rounded'>
        <div>
          <div className='text-xl font-bold'><div className='font-extrabold'>#{musician.musicianNumber}</div> {musician.firstName} {musician.lastName} </div>
          <div>{musician.shortDescription}</div>
          <div>{musician.biography}</div>
        </div>
        <div>
          <div className='grid grid-cols-2 gap-2 bg-white'>
            <Link href={`/musicians/edit/${musician.id}`} className='block p-2 m-2 text-white bg-blue-500 rounded'>Modifier</Link>
            <button className='p-2 m-2 text-white bg-red-500 rounded' onClick={() => deleteHandler(musician.id)}>Supprimer</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default MusicianListItem
