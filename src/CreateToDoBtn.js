import React from 'react'

export default function CreateToDoBtn({setOpenModal}) {
  return (
    <div className='mt-5'>
      <button onClick={ () => {setOpenModal(true)} } className='p-1 bg-blue-700 rounded-full'><svg className="w-7 h-7" fill="currentcolor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" /></svg></button>
    </div>
  )
}
