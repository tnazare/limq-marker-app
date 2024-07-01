import React from 'react'
import Link from 'next/link'
import {TableCell, TableRow} from "@/features/common/components/shadcn-ui/table";
import type {SeasonTeamPayload} from "@/features/seasonTeams/prismaPayloads/seasonTeamPayload";

interface SeasonTeamListItemProps {
    seasonTeam: SeasonTeamPayload,
    deleteHandler: (id: string) => void
}

// TODO MAB THIS
function SeasonTeamListItem({seasonTeam, deleteHandler}: SeasonTeamListItemProps) {
    return (
        <TableRow className='flex-1 m-1 p-2 even:bg-gray-50 odd:bg-white'>
            <TableCell className='border'>
                {seasonTeam.name}
            </TableCell>
            <TableCell className='border'>
                {format(seasonTeam.color, "PPP")}
            </TableCell>
            <TableCell className='border'>
            </TableCell>
        </TableRow>
    )
}

export default SeasonTeamListItem