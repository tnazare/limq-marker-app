"use client";

import React from 'react'
import {useRouter} from 'next/navigation';
import NavigationBar from "@/features/common/components/navigationBar";
import {useCreateSeasonTeamMutation} from "@/features/seasonTeams/store/seasonTeams";
import {TeamColorSchema} from "@/prisma/generated/schemas";
import type {IdParams} from "@/features/common/params/idParams";
import {idParameterValidator} from "@/features/common/paramValidators/idParameterValidator";
import CreateSeasonTeamForm from "@/features/seasonTeams/components/createSeasonTeamForm";

function CreateSeasonTeamPage({params}: IdParams) {
  const validationResult = idParameterValidator({params});
  if (!validationResult.isValid) {
    throw new Error("Invalid season id parameter");
  }
  const router = useRouter();
  const [createSeasonTeam, {isError, isSuccess, error}] = useCreateSeasonTeamMutation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('teamName') as string;
    const color = TeamColorSchema.parse(formData.get('teamColor') as string);
    createSeasonTeam({
      seasonId: params.id,
      name,
      color,
    });
  }
  React.useEffect(() => {
    if (isError && error && 'data' in error) {
      // @ts-ignore
      alert(`Un problème est survenu pendant la création de l'équipe : ${error.data?.error.message}`);
    }
    if (isSuccess) {
      router.push(`/seasons/${params.id}/seasonTeams`);
    }
  }, [isError, isSuccess, router])
  return (
    <div>
      <NavigationBar/>
      <h1 className="text-3xl">Ajouter une équipe</h1>
      <CreateSeasonTeamForm handleSubmit={handleSubmit}/>
    </div>
  )
}

export default CreateSeasonTeamPage
