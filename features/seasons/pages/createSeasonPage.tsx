"use client";

import React from 'react'
import {useRouter} from 'next/navigation';
import NavigationBar from "@/features/common/components/navigationBar";
import CreateSeasonForm from "@/features/seasons/components/createSeasonForm";
import {useCreateSeasonMutation} from "@/features/seasons/store/seasons";

function CreateSeasonPage() {
  const router = useRouter();
  const [createSeason, {isError, isSuccess, error}] = useCreateSeasonMutation();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const label = formData.get('label') as string;
    const startDate = new Date(formData.get('startDate') as string);
    createSeason({
      label,
      startDate,
    });
  }
  React.useEffect(() => {
    if (isError && error && 'data' in error) {
      // @ts-ignore
      alert(`Un problème est survenu pendant la création de la saison : ${error.data?.error.message}`);
    }
    if (isSuccess) {
      router.push("/seasons");
    }
  }, [isError, isSuccess, router])
  return (
    <div>
      <NavigationBar/>
      <h1 className="text-3xl">Ajouter une saison</h1>
      <CreateSeasonForm handleSubmit={handleSubmit}/>
    </div>
  )
}

export default CreateSeasonPage
