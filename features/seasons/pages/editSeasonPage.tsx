import React from 'react'
import {useRouter} from 'next/navigation';
import NavigationBar from "@/features/common/components/navigationBar";
import {idParameterValidator} from "@/features/common/paramValidators/idParameterValidator";
import EditSeasonForm from "@/features/seasons/components/editSeasonForm";
import {useGetSeasonQuery, useUpdateSeasonMutation} from "@/features/seasons/store/seasons";
import type {IdParams} from '@/features/common/params/idParams';

function EditSeasonPage({params}: IdParams) {
  const validationResult = idParameterValidator({params});
  if (!validationResult.isValid) {
    throw new Error("Invalid id parameter");
  }
  const router = useRouter();
  const [updateSeason, {isError, isSuccess, error}] = useUpdateSeasonMutation();
  const {data, isFetching,} = useGetSeasonQuery(params.id, {
    refetchOnMountOrArgChange: false,
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const id = formData.get('id') as string;
    const label = formData.get('label') as string;
    const startDate = new Date(formData.get('startDate') as string);
    updateSeason({
      id,
      label,
      startDate,
    })
  }
  React.useEffect(() => {
    if (isError && error && 'data' in error) {
      // @ts-ignore
      alert(`Un problème est survenu pendant la modification de la saison : ${error.data?.error.message}`);
    }
    if (isSuccess) {
      router.push("/seasons");
    }
  }, [isFetching, isError, isSuccess, error, router])
  return (
    <div>
      <NavigationBar/>
      <h1 className="text-3xl">Modifier une saison</h1>
      {
        isFetching ? <p>Loading...</p> : (
          data && data.data &&
          <EditSeasonForm
            defaultValues={{
              id: params.id,
              label: data.data.label,
              startDate: new Date(data.data.startDate),
            }}
            handleSubmit={handleSubmit}/>
        )
      }
    </div>
  )
}

export default EditSeasonPage
