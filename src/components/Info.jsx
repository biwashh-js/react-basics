import React from 'react'

const Info = ({name,email,phone}) => {
  //props are immutable
  // let {name,email,phone} = props
  // now it can be changed
   
  return (
    <>
       <h1>User info</h1>
      <p>name: {name}</p>
        <p>email : {email}</p>
        <p>phone no : {phone}</p>
    </>
  )
}

export default Info
