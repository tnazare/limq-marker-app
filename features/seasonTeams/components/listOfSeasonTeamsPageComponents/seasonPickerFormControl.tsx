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

interface SeasonPickerFormControlProps {
    dropDownLabel: string,
    seasons: SeasonPayload[],
    seasonSelectHandler: (id: string) => void
}

function SeasonPickerFormControl({dropDownLabel,seasons,seasonSelectHandler}: SeasonPickerFormControlProps) {
    return (
        <Select onValueChange={seasonSelectHandler}>
            <SelectTrigger className="w-2/6 bg-white">
                <SelectValue placeholder="Sélectionner une saison..." />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup className="bg-white">
                    <SelectLabel>{dropDownLabel}</SelectLabel>
                    {seasons.map((season) => (
                        // Make sure to set a unique key for each SelectItem
                        <SelectItem key={season.id} value={season.id}>
                            {season.label} ({format(season.startDate, "PPP")})
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

export default SeasonPickerFormControl
