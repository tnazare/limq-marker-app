import React from "react";
import {Input} from "@/features/common/components/shadcn-ui/input";
import {Label} from "@/features/common/components/shadcn-ui/label";

export interface TextInputFormControlProps {
  defaultValue: string;
  name: string;
  label: string;
}

function TextIntFormControl({defaultValue, label, name}: TextInputFormControlProps) {
  const [value, setValue] = React.useState(defaultValue);
  return (
    <>
      <Label
        className="p-2 m-2 text-gray-800 bg-white"
        htmlFor={name}>
        {label}:
      </Label>
      <Input
        className="p-2 m-2 w-1/6 text-black border border-gray-500 rounded"
        type="text"
        name={name}
        id={name}
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      />
    </>
  )
}

export default TextIntFormControl;
