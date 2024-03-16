import React from 'react'
interface ShortDescriptionFormControlProps {
  defaultValue: string
}
function ShortDescriptionFormControl({ defaultValue }: ShortDescriptionFormControlProps) {
  const [shortDescription, setShortDescription] = React.useState(defaultValue);
  return (
    <>
      <label
        className="p-2 m-2 text-white bg-green-500 rounded"
        htmlFor="shortDescription">
        Courte Description
      </label>
      <input
        className="p-2 m-2 text-black border border-gray-500 rounded"
        type="text"
        name="shortDescription"
        id="shortDescription"
        value={shortDescription}
        onChange={(e) => setShortDescription(e.currentTarget.value)}
      />
    </>
  )
}
export default ShortDescriptionFormControl
