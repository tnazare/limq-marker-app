import React from 'react'
import NavigationBar from "@/features/common/components/navigationBar";
import {useDeleteMusicianMutation} from '@/features/musicians/store/musicians'
import CreateNewTeamButton from "@/features/teams/components/listOfTeamsPageComponents/createNewTeamButton";
import ListOfTeams from "@/features/teams/components/listOfTeamsPageComponents/listOfTeams";
import {useGetTeamsQuery} from "@/features/teams/store/teams";

function ListOfTeamsPage() {
  const {isFetching, isError, error, isSuccess, data, refetch} = useGetTeamsQuery(undefined, {
    refetchOnMountOrArgChange: true
  });
  const [deleteMusician, {isSuccess: deleteSuccess}] = useDeleteMusicianMutation();
  const deleteHandler = (id: string) => {
    // eslint-disable-next-line no-restricted-globals
    const confirmed = confirm("Êtes vous sur de vouloir supprimer ce musicien?");
    if (confirmed) {
      deleteMusician(id);
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
          <h1 className="text-3xl">Liste des équipes</h1>
        </div>
        <div className='m-5'>
          <CreateNewTeamButton/>
        </div>
        <div className='m-5'>
          {isFetching && <div>En chargement...</div>}
          {isError && <div>{error.toString()}</div>}
          {isSuccess && data && data.data && (
            <ListOfTeams teams={data.data} deleteHandler={deleteHandler}/>
          )}
        </div>
      </div>
    </div>
  )
}

export default ListOfTeamsPage
