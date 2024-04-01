"use client";

import React from 'react'
import { useRouter } from 'next/navigation';
import CreateMusicianForm from '@/features/musicians/components/createMusicianForm'
import { useCreateMusicianMutation } from '@/features/musicians/store/musicians'
import NavigationBar from "@/features/common/components/navigationBar";

function CreateMusicianPage() {
  const router = useRouter();
  const [createMusician, { isError, isSuccess }] = useCreateMusicianMutation();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const shortDescription = formData.get('shortDescription') as string;
    const biography = formData.get('biography') as string;
    createMusician({
      firstName,
      lastName,
      shortDescription,
      biography
    })
  }
  React.useEffect(() => {
    if (isError) {
      alert('Problème lors de l\'ajout du musicien');
    }
    if (isSuccess) {
      router.push("/musicians");
    }
  }, [isError, isSuccess, router])
  return (
    <div>
      <NavigationBar/>
      <h1 className="text-3xl">Ajouter un musicien</h1>
      <CreateMusicianForm handleSubmit={handleSubmit} />
    </div>
  )
}
export default CreateMusicianPage
