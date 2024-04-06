import React from 'react'
import {Input} from "@/features/common/components/shadcn-ui/input";
import {Label} from "@/features/common/components/shadcn-ui/label";

interface MusicianNumberFormControlProps {
  defaultValue: number
}
function MusicianNumberFormControl({ defaultValue }: MusicianNumberFormControlProps) {
  const [musicianNumber, setMusicianNumber] = React.useState(defaultValue);
  return (
    <>
      <Label
        className="p-2 m-2 text-gray-800 bg-white"
        htmlFor="musicianNumber">
        Numéro de joueur:
      </Label>
      <Input
        className="p-2 m-2 w-1/6 text-black border border-gray-500 rounded"
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
