import React from 'react'
import {TableCell, TableRow} from "@/features/common/components/shadcn-ui/table";
import type {SeasonTeamPayload} from "@/features/seasonTeams/prismaPayloads/seasonTeamPayload";

interface SeasonTeamListItemProps {
    seasonTeam: SeasonTeamPayload,
}

function SeasonTeamListItem({seasonTeam}: SeasonTeamListItemProps) {
    return (
        <TableRow className='flex-1 m-1 p-2 even:bg-gray-50 odd:bg-white'>
            <TableCell className='border'>
                {seasonTeam.name}
            </TableCell>
            <TableCell className='border'>
                {seasonTeam.color}
            </TableCell>
            <TableCell className='border'>
            </TableCell>
        </TableRow>
    )
}

export default SeasonTeamListItem