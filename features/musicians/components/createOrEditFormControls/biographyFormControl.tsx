import React from 'react'

interface BiographyFormControlProps {
  defaultValue: string
}
function BiographyFormControl({ defaultValue }: BiographyFormControlProps) {
  const [biography, setBiography] = React.useState(defaultValue);
  return (
    <>
      <label
        className="p-2 m-2 text-white bg-green-500 rounded"
        htmlFor="biography">
        Biographie
      </label>
      <input
        className="p-2 m-2 text-black border border-gray-500 rounded"
        type="text"
        name="biography"
        id="biography"
        value={biography}
        onChange={(e) => setBiography(e.currentTarget.value)}
      />
    </>
  )
}
export default BiographyFormControl
