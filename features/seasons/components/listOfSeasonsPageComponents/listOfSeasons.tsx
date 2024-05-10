import React from 'react'
import {Table, TableBody, TableHead, TableHeader, TableRow} from "@/features/common/components/shadcn-ui/table";
import SeasonListItem from '@/features/seasons/components/listOfSeasonsPageComponents/seasonListItem';
import type {SeasonPayload} from '../../prismaPayloads/seasonPayload';

interface ListOfSeasonsProps {
  seasons: SeasonPayload[],
  deleteHandler: (id: string) => void
}

function ListOfSeasons(props: ListOfSeasonsProps) {
  return (
    <Table className="table-auto w-1/2 border">
      <TableHeader>
        <TableRow className='bg-gray-300'>
          <TableHead className='w-[120px] border'>Libellé de la saison</TableHead>
          <TableHead className='w-[80px] border'>Date de début</TableHead>
          <TableHead className='w-[80px] border'>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {props.seasons.map((season) => (
          <SeasonListItem key={season.id} season={season} deleteHandler={props.deleteHandler}/>
        ))}
      </TableBody>
    </Table>
  )
}

export default ListOfSeasons
