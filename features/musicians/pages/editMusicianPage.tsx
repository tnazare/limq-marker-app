import React from 'react'
import {useRouter} from 'next/navigation';
import NavigationBar from "@/features/common/components/navigationBar";
import {idParameterValidator} from "@/features/common/paramValidators/idParameterValidator";
import EditMusicianForm from '@/features/musicians/components/editMusicianForm';
import {useGetMusicianQuery, useUpdateMusicianMutation} from '@/features/musicians/store/musicians'
import {PersonTypeSchema} from "@/prisma/generated/schemas";
import type {IdParams} from '@/features/common/params/idParams';

function EditMusicianPage({params}: IdParams) {
  const validationResult = idParameterValidator({params});
  if (!validationResult.isValid) {
    throw new Error("Invalid id parameter");
  }
  const router = useRouter();
  const [updateMusician, {isError, isSuccess, error}] = useUpdateMusicianMutation();
  const {data, isFetching,} = useGetMusicianQuery(params.id, {
    refetchOnMountOrArgChange: false,
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const id = formData.get('id') as string;
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const shortDescription = formData.get('shortDescription') as string;
    const biography = formData.get('biography') as string;
    const musicianNumber = Number(formData.get('musicianNumber') as string);
    const type = PersonTypeSchema.parse(formData.get('type') as string);
    updateMusician({
      id,
      firstName,
      lastName,
      shortDescription,
      biography,
      musicianNumber,
      type,
    })
  }
  React.useEffect(() => {
    if (isError && error && 'data' in error) {
      // @ts-ignore
      alert(`Un problème est survenu pendant la modification du musicien.ne : ${error.data?.error.message}`);
    }
    if (isSuccess) {
      router.push("/musicians");
    }
  }, [isFetching, isError, isSuccess, error, router])
  return (
    <div>
      <NavigationBar/>
      <h1 className="text-3xl">Modifier un.e musicien.ne</h1>
      {
        isFetching ? <p>Loading...</p> : (
          data && data.data &&
          <EditMusicianForm
            defaultValues={{
              id: params.id,
              firstName: data.data.firstName,
              lastName: data.data.lastName,
              shortDescription: data.data.shortDescription || "",
              biography: data.data.biography || "",
              musicianNumber: Number(data.data.musicianNumber) || 0,
              type: data.data.type.toString()
            }}
            handleSubmit={handleSubmit}/>
        )
      }
    </div>
  )
}

export default EditMusicianPage
