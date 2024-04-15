import React from 'react'
import {Table, TableBody, TableHead, TableHeader, TableRow} from "@/features/common/components/shadcn-ui/table";
import MusicianListItem from './musicianListItem'
import type {MusicianPayload} from '@/features/musicians/prismaPayloads/musicianPayload'

interface ListOfMusiciansProps {
  musicians: MusicianPayload[],
  deleteHandler: (id: string) => void
}

function ListOfMusicians(props: ListOfMusiciansProps) {
  return (
    <Table className="table-auto w-1/3 border">
      <TableHeader>
        <TableRow className='bg-gray-300'>
          <TableHead className='w-[40px] border'>Numéro du joueur</TableHead>
          <TableHead className='w-[120px] border'>Nom Prénom</TableHead>
          <TableHead className='border'>Courte description</TableHead>
          <TableHead className='w-[80px] border'>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {props.musicians.map((musician) => (
          <MusicianListItem key={musician.id} musician={musician} deleteHandler={props.deleteHandler}/>
        ))}
      </TableBody>
    </Table>
  )
}

export default ListOfMusicians
