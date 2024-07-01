import React from "react";
import {format} from "date-fns";
import {
  Select,
  SelectContent,
  SelectGroup, SelectItem, SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/features/common/components/shadcn-ui/select";
import type {SeasonPayload} from "@/features/seasons/prismaPayloads/seasonPayload";
import {TeamColorSchema} from "@/prisma/generated/schemas";
import {Label} from "@/features/common/components/shadcn-ui/label";


function TeamColorPickerFormControl() {
  const [teamColor, setTeamColor] = React.useState<string | undefined>("")

  return (
    <>
      <input type="hidden" name="teamColor" value={teamColor}/>
      <Label className="p-2 m-2">Couleur:</Label>
      <Select onValueChange={(color: string) => setTeamColor(color)}>
        <SelectTrigger className="w-2/6 bg-white">
          <SelectValue placeholder="Sélectionner la couleur de l'équipe"/>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup className="bg-white">
            <SelectLabel>{"Couleur"}</SelectLabel>
            <SelectItem value="BLUE">
              Bleu
            </SelectItem>
            <SelectItem value="YELLOW">
              Jaune
            </SelectItem>
            <SelectItem value="RED">
              Rouge
            </SelectItem>
            <SelectItem value="GREEN">
              Vert
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  )
}

export default TeamColorPickerFormControl
