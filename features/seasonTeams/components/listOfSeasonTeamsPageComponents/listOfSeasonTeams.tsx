import React from 'react'
import {Table, TableBody, TableHead, TableHeader, TableRow} from "@/features/common/components/shadcn-ui/table";
import {SeasonTeamPayload} from "@/features/seasonTeams/prismaPayloads/seasonTeamPayload";
import SeasonTeamListItem from "@/features/seasonTeams/components/listOfSeasonTeamsPageComponents/seasonTeamListItem";
interface ListOfSeasonTeamsProps {
    seasonTeams: SeasonTeamPayload[]
}

function ListOfSeasonTeams(props: ListOfSeasonTeamsProps) {
    return (
        <Table className="table-auto w-1/2 border">
            <TableHeader>
                <TableRow className='bg-gray-300'>
                    <TableHead className='w-[120px] border'>Nom</TableHead>
                    <TableHead className='w-[80px] border'>Couleur</TableHead>
                    <TableHead className='w-[80px] border'>Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {props.seasonTeams.map((seasonTeam) => (
                    <SeasonTeamListItem key={seasonTeam.id} seasonTeam={seasonTeam}/>
                ))}
            </TableBody>
        </Table>
    )
}

export default ListOfSeasonTeams
