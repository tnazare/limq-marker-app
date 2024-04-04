import React from 'react'

interface FirstNameFormControlProps {
  defaultValue: string
}
function FirstNameFormControl({ defaultValue }: FirstNameFormControlProps) {
  const [firstName, setFirstName] = React.useState(defaultValue);
  return (
    <>
      <label
        className="p-2 m-2 text-white bg-green-500 rounded"
        htmlFor="firstName">
        Prénom
      </label>
      <input
        className="p-2 m-2 text-black border border-gray-500 rounded"
        type="text"
        name="firstName"
        id="firstName"
        value={firstName}
        onChange={(e) => setFirstName(e.currentTarget.value)}
      />
    </>
  )
}
export default FirstNameFormControl
