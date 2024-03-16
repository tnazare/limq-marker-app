import React from 'react'
interface LastNameFormControlProps {
  defaultValue: string
}
function LastNameFormControl({ defaultValue }: LastNameFormControlProps) {
  const [lastName, setLastName] = React.useState(defaultValue);
  return (
    <>
      <label
        className="p-2 m-2 text-white bg-green-500 rounded"
        htmlFor="lastName">
        Nom
      </label>
      <input
        className="p-2 m-2 text-black border border-gray-500 rounded"
        type="text"
        name="lastName"
        id="lastName"
        value={lastName}
        onChange={(e) => setLastName(e.currentTarget.value)}
      />
    </>
  )
}
export default LastNameFormControl
