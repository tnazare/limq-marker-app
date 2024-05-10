import React from 'react'
import {format} from "date-fns";
import {CalendarIcon} from "lucide-react";
import {Button} from "@/features/common/components/shadcn-ui/button";
import {Calendar} from "@/features/common/components/shadcn-ui/calendar";
import {Label} from "@/features/common/components/shadcn-ui/label";
import {Popover, PopoverContent, PopoverTrigger} from "@/features/common/components/shadcn-ui/popover";
import {cn} from "@/lib/utils";

interface DatePickerFormControlProps {
  defaultValue: Date
}

function DatePickerFormControl({defaultValue}: DatePickerFormControlProps) {
  const [startDate, setStartDate] = React.useState<Date | undefined>(defaultValue)
  const [calendarOpen, setCalendarOpen] = React.useState<boolean | undefined>(false);

  return (
    <>
      <input type="hidden" name="startDate" value={startDate?.toDateString()}/>
      <Label className="p-2 m-2">Date de début:</Label>
      <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-[280px] pl-3 m-2 text-left font-normal",
            )}
          >
            {startDate ? (
              format(startDate, "PPP")
            ) : (
              <span>Pick a date</span>
            )}
            <CalendarIcon className="ml-auto h-4 w-4 opacity-50"/>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-2 m-2 bg-white" align="start">
          <Calendar
            mode="single"
            selected={startDate}
            onSelect={(date) => {
              setCalendarOpen(false);
              setStartDate(date);
            }}
            disabled={(date) =>
              date < new Date("1990-01-01")
            }
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </>
  )
}

export default DatePickerFormControl
