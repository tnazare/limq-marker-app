import React from 'react'
import {Button} from "@/features/common/components/shadcn-ui/button";
import {Input} from "@/features/common/components/shadcn-ui/input";

function SubmitButton() {
  return (
    <Button asChild>
      <Input type="submit" value="Sauvegarder"
             className="p-2 m-2 w-1/6 text-white bg-green-500 rounded [&:hover]:cursor-pointer"/>
    </Button>
  )
}

export default SubmitButton
