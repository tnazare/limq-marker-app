import React, {useState} from 'react'
import {useGetSeasonTeamsQuery} from "@/features/seasonTeams/store/seasonTeams";
import NavigationBar from "@/features/common/components/navigationBar";
import ListOfSeasonTeams from "@/features/seasonTeams/components/listOfSeasonTeamsPageComponents/listOfSeasonTeams";
import SeasonPickerFormControl
    from "@/features/seasonTeams/components/listOfSeasonTeamsPageComponents/seasonPickerFormControl";
import {useGetSeasonsQuery} from "@/features/seasons/store/seasons";

function ListOfSeasonTeamsPage() {
    const {
        isFetching: isFetchingSeason, isError: isErrorSeason, error: errorSeason,
        isSuccess: isSuccessSeason, data: dataSeason, refetch: refetchSeason
    } = useGetSeasonsQuery(undefined, {
        refetchOnMountOrArgChange: true
    });

    const [seasonId, setSeasonId] = useState("");

    const handleSelectedSeason = (selectedSeasonId: string) => {
        setSeasonId(selectedSeasonId)
    }
    const {
        isFetching,
        isError,
        error,
        isSuccess,
        data,
        refetch
    } = useGetSeasonTeamsQuery(seasonId, {
        refetchOnMountOrArgChange: true
    });

    return (
        <div>
            <NavigationBar/>
            <div className='m-5'>
                <h1 className="text-3xl">Liste des équipes de la ligue</h1>
            </div>
            <div className='w-1/2'>
                <div className='m-5'>
                    {isFetchingSeason || isErrorSeason || (isSuccessSeason && dataSeason && dataSeason.data) ? (
                        <SeasonPickerFormControl
                            dropDownLabel={
                                isFetchingSeason ? "En chargement..." :
                                    isErrorSeason ? errorSeason.toString() :
                                        "Saisons"
                            }
                            seasons={
                                isFetchingSeason || isErrorSeason ? [] :
                                    isSuccessSeason && dataSeason && dataSeason.data ? dataSeason.data :
                                        []
                            }
                            seasonSelectHandler={handleSelectedSeason}
                        />
                    ) : null}
                </div>
                <div className='m-5'>
                    {!seasonId ? (
                        <div>Veuillez d'abord sélectionner une saison.</div>
                    ) : (
                        <>
                            {isFetching && <div>En chargement...</div>}
                            {isError && <div>{error.toString()}</div>}
                            {isSuccess && data && data.data && (
                                <ListOfSeasonTeams seasonTeams={data.data}/>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ListOfSeasonTeamsPage
