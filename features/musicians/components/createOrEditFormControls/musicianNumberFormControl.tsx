import React from 'react'

interface MusicianNumberFormControlProps {
  defaultValue: number
}
function MusicianNumberFormControl({ defaultValue }: MusicianNumberFormControlProps) {
  const [musicianNumber, setMusicianNumber] = React.useState(defaultValue);
  return (
    <>
      <label
        className="p-2 m-2 text-white bg-green-500 rounded"
        htmlFor="musicianNumber">
        Numéro de joueur
      </label>
      <input
        className="p-2 m-2 text-black border border-gray-500 rounded"
        type="text"
        name="musicianNumber"
        id="musicianNumber"
        value={musicianNumber}
        onChange={(e) => setMusicianNumber(Number(e.currentTarget.value))}
      />
    </>
  )
}
export default MusicianNumberFormControl
