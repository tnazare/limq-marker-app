import React from 'react'
import Link from 'next/link'

function CreateNewMusicianButton() {
  return (
    <Link href="/musicians/create" className='block p-2 m-2 text-white bg-green-500 rounded'>Ajouter un musicien</Link>
  )
}
export default CreateNewMusicianButton
