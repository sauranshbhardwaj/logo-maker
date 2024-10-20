import { UpdateStorageContext } from '@/context/UpdateStorageContext';
import { icons } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react'

function LogoPreview() {

    const [storageValue,setStorageValue]=useState();
    const {updateStorage,setUpdateStorage}=useContext(UpdateStorageContext);

    useEffect(()=>{
        const storageData=JSON.parse(localStorage.getItem('value'));
        console.log(storageData);
        setStorageValue(storageData);
    },[updateStorage])

    const Icon=({name,color,size})=>{
        const LucidIcon=icons[name];
        if(!LucidIcon)
        {
            return ;
        }
        return <LucidIcon color={color} size={size} />
    }

  return (
    <div className='flex items-center justify-center h-screen'> 
      <div className='h-[500px] w-[500px] bg-gray-200 outline-dotted outline-gray-300'>
        <div className='h-full w-full flex items-center justify-center'
        style={{
            borderRadius:storageValue?.bgRounded,
            background:storageValue?.bgColor,
        }}
        >
            <Icon name={storageValue?.icon} 
            color={storageValue?.iconColor} 
            size={storageValue?.iconSize}
            />
        </div>
      </div>
    </div>
  )
}

export default LogoPreview
