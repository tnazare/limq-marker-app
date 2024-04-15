import React from 'react'
import NavigationBar from "@/features/common/components/navigationBar";
import CreateNewMusicianButton
  from "@/features/musicians/components/listOfMusiciansPageComponents/createNewMusicianButton";
import ListOfMusiciansComponent from '@/features/musicians/components/listOfMusiciansPageComponents/listOfMusicians'
import {useDeleteMusicianMutation, useGetMusiciansQuery} from '@/features/musicians/store/musicians'

function ListOfMusiciansPage() {
  const {isFetching, isError, error, isSuccess, data, refetch} = useGetMusiciansQuery(undefined, {
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
          <h1 className="text-3xl">Liste des musiciens de la ligue</h1>
        </div>
        <div className='m-5'>
          <CreateNewMusicianButton/>
        </div>
        <div className='m-5'>
          {isFetching && <div>En chargement...</div>}
          {isError && <div>{error.toString()}</div>}
          {isSuccess && data && data.data && (
            <ListOfMusiciansComponent musicians={data.data} deleteHandler={deleteHandler}/>
          )}
        </div>
      </div>
    </div>
  )
}

export default ListOfMusiciansPage
