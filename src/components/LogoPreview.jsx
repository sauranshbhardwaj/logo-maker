import { icons } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react'

function LogoPreview({updateStorage}) {
    const Icon=({name,color,size, rotate}) => {
        const LucidIcon = icons[name];
        if (!LucidIcon) return;

        return <LucidIcon color={color} size={size} 
        style={{
          transform:`rotate(${rotate}deg)`
        }}
        />
    }

  return (
    <div className='flex items-center justify-center h-screen'> 
      <div className='h-[500px] w-[500px] bg-gray-200 outline-dotted outline-gray-300'
      style={{
        padding:updateStorage?.bgPadding
      }}
      >
        <div className='h-full w-full flex items-center justify-center'
        style={{
            borderRadius:updateStorage?.bgRounded,
            background:updateStorage?.bgColor,
        }}
        >
            <Icon name={updateStorage?.icon}
            color={updateStorage?.iconColor}
            size={updateStorage?.iconSize}
            rotate={updateStorage?.iconRotate}
            />
        </div>
      </div>
    </div>
  )
}

export default LogoPreview
