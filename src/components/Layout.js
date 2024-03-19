import React from 'react'
import Navbar from './Navbar'

import '../style/global.css'
export default function Layout  ({children})  {
  return (
    <div className='layout'>
    <Navbar />

    <div className='content'>
{children}
    </div>
    <footer>
        <p>
            CopyRight 2024 @New-GatsBy
        </p>
    </footer>
    </div>
  )
}
