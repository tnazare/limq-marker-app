"use client";

import NavigationBar from "@/features/common/components/navigationBar";

export default function Home() {
  return (
    <>
      <NavigationBar/>
      <main className="p-2">
        <h1 className="text-3xl">Bienvenue dans l'outil de saisie des match des la Ligue d'Improvisation Musicale de
          Québec</h1>
      </main>
    </>
  )
}
