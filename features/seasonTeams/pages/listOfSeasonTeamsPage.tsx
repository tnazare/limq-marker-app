import React from 'react'
import {useGetSeasonTeamsQuery} from "@/features/seasonTeams/store/seasonTeams";
import NavigationBar from "@/features/common/components/navigationBar";
import ListOfSeasonTeams from "@/features/seasonTeams/components/listOfSeasonTeamsPageComponents/listOfSeasonTeams";

function ListOfSeasonTeamsPage() {
    // TODO MAB MAKE IT SO WE CAN SELECT A SEASON FIRST
    const {isFetching, isError, error, isSuccess, data, refetch} = useGetSeasonTeamsQuery("clxwpwjie0000hrgjgxgkgmja", {
        refetchOnMountOrArgChange: true
    });
    return (
        <div>
            <NavigationBar/>
            <div className='w-1/2'>
                <div className='m-5'>
                    <h1 className="text-3xl">Liste des équipes de la ligue</h1>
                </div>
                <div className='m-5'>
                    "TODO MAB PUT SEASON SELECTOR HERE"
                </div>
                <div className='m-5'>
                    {isFetching && <div>En chargement...</div>}
                    {isError && <div>{error.toString()}</div>}
                    {isSuccess && data && data.data && (
                        <ListOfSeasonTeams seasonTeams={data.data}/>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ListOfSeasonTeamsPage
