import React from 'react'
import { Button } from './ui/button'
import { Download } from 'lucide-react'

function Header({DownloadIcon}) {
  return (
    <div className='p-4 shadow-sm border flex justify-between items-center'>
      <div className='flex flex-row'>
        <img src='/logo.png' width={35} height={35}/>
        <h2 className='text-primary text-3xl ml-3 font-bold'>Logo Maker</h2>
      </div>
      <Button className='flex gap-2 items-center' onClick={()=>DownloadIcon(Date.now())}> 
        <Download className='h-4 w-4'/> Download</Button>
    </div>
  )
}

export default Header
