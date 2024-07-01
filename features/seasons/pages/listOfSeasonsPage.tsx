import React from 'react'
import NavigationBar from "@/features/common/components/navigationBar";
import CreateNewSeasonButton from "@/features/seasons/components/listOfSeasonsPageComponents/createNewSeasonButton";
import ListOfSeasons from "@/features/seasons/components/listOfSeasonsPageComponents/listOfSeasons";
import {useDeleteSeasonMutation, useGetSeasonsQuery} from "@/features/seasons/store/seasons";

function ListOfSeasonsPage() {
  const {isFetching, isError, error, isSuccess, data, refetch} = useGetSeasonsQuery(undefined, {
    refetchOnMountOrArgChange: true
  });
  const [deleteSeason, {isSuccess: deleteSuccess}] = useDeleteSeasonMutation();
  const deleteHandler = (id: string) => {
    // eslint-disable-next-line no-restricted-globals
    const confirmed = confirm("Êtes-vous sûr de vouloir supprimer cette saison?");
    if (confirmed) {
      deleteSeason(id);
    }
  }
  React.useEffect(() => {
    if (deleteSuccess) {
      refetch();
    }
  }, [deleteSuccess, refetch])
  return (
    <div>
      <NavigationBar/>
      <div className='w-1/2'>
        <div className='m-5'>
          <h1 className="text-3xl">Liste des saisons de la ligue</h1>
        </div>
        <div className='m-5'>
          <CreateNewSeasonButton/>
        </div>
        <div className='m-5'>
          {isFetching && <div>En chargement...</div>}
          {isError && <div>{error.toString()}</div>}
          {isSuccess && data && data.data && (
            <ListOfSeasons seasons={data.data} deleteHandler={deleteHandler}/>
          )}
        </div>
      </div>
    </div>
  )
}

export default ListOfSeasonsPage
