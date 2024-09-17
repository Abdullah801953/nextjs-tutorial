import React from 'react'

const page = ({params}:{params:{slug:string}}) => {
  return (
    <h1>Docs home Page{params.slug[0]}</h1>
  )
}

export default page