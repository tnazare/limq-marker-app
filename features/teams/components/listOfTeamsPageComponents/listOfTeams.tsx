import React from 'react'
import {Table, TableBody, TableHead, TableHeader, TableRow} from "@/features/common/components/shadcn-ui/table";
import TeamListItem from './teamListItem'
import type {TeamPayload} from "@/features/teams/prismaPayloads/teamPayload";

interface ListOfTeamsProps {
  teams: TeamPayload[],
  deleteHandler: (id: string) => void
}

function ListOfTeams(props: ListOfTeamsProps) {
  return (
    <Table className="table-auto w-1/3 border">
      <TableHeader>
        <TableRow className='bg-gray-300'>
          <TableHead className='w-[120px] border'>Nom de l'équipe</TableHead>
          <TableHead className='w-[40px] border'>Couleur</TableHead>
          <TableHead className='border'>Membres</TableHead>
          <TableHead className='w-[80px] border'>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {props.teams.map((team) => (
          <TeamListItem key={team.id} team={team} deleteHandler={props.deleteHandler}/>
        ))}
      </TableBody>
    </Table>
  )
}

export default ListOfTeams
