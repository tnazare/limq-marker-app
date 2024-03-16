import React from 'react'
import MusicianListItem from './musicianListItem'
import type { MusicianPayload } from '@/features/musicians/prismaPayloads/musicianPayload'

interface ListOfMusiciansProps {
  musicians: MusicianPayload[],
  deleteHandler: (id: string) => void
}
function ListOfMusicians(props: ListOfMusiciansProps) {
  return (
    <div className='flex flex-col p-6 bg-gray-400'>
      {props.musicians.map((musician) => (
        <MusicianListItem key={musician.id} musician={musician} deleteHandler={props.deleteHandler} />
      ))}
    </div>
  )
}
export default ListOfMusicians
