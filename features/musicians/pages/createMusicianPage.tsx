"use client";

import React from 'react'
import {useRouter} from 'next/navigation';
import NavigationBar from "@/features/common/components/navigationBar";
import CreateMusicianForm from '@/features/musicians/components/createMusicianForm'
import {useCreateMusicianMutation} from '@/features/musicians/store/musicians'
import {PersonTypeSchema} from "@/prisma/generated/schemas";

function CreateMusicianPage() {
  const router = useRouter();
  const [createMusician, {isError, isSuccess, error}] = useCreateMusicianMutation();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const shortDescription = formData.get('shortDescription') as string;
    const biography = formData.get('biography') as string;
    const musicianNumber = Number(formData.get('musicianNumber') as string);
    const type = PersonTypeSchema.parse(formData.get('type') as string);
    createMusician({
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
      alert(`Un problème est survenu pendant la création du musicien.ne : ${error.data?.error.message}`);
    }
    if (isSuccess) {
      router.push("/musicians");
    }
  }, [isError, isSuccess, router])
  return (
    <div>
      <NavigationBar/>
      <h1 className="text-3xl">Ajouter un musicien</h1>
      <CreateMusicianForm handleSubmit={handleSubmit}/>
    </div>
  )
}

export default CreateMusicianPage
