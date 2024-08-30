import React from 'react'
// import site-logo.svg from "./images/site-logo.svg";

export default function Header() {
  return (
    <div className='flex flex-row mx-3 my-4 gap-3 font-bold text-2xl'>
      <img src='./images/site-logo.svg' alt='logo' />
      <h2>DSA Revision</h2>
    </div>
  )
}