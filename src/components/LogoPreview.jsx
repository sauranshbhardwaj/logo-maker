import html2canvas from 'html2canvas';
import { icons } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react'

const BASE_URL='https://logoexpress.tubeguruji.com'

function LogoPreview({updateStorage, downloadIcon}) {

  useEffect(()=>{
    if(downloadIcon)
    {
      downloadPngLogo();
    }
  },[downloadIcon])

  const downloadPngLogo=()=>{
    const downloadLogoDiv=document.getElementById('downloadLogoDiv');

    html2canvas(downloadLogoDiv,{
      backgroundColor:null
    }).then(canvas=>{
      const pngImage=canvas.toDataURL('image/png');
      const downloadLink=document.createElement('a');
      downloadLink.href=pngImage;
      downloadLink.download='Logo_Maker.png';
      downloadLink.click();
    })
  }


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
        <div id='downloadLogoDiv' 
        className='h-full w-full flex items-center justify-center'
        style={{
            borderRadius:updateStorage?.bgRounded,
            background:updateStorage?.bgColor,
        }}
        >
            {updateStorage?.icon?.includes('.png')?
            <img src={"/png/"+updateStorage?.icon} 
            style={{
              height:updateStorage?.iconSize,
              width:updateStorage?.iconSize,
            }}
            />:
            <Icon name={updateStorage?.icon}
            color={updateStorage?.iconColor}
            size={updateStorage?.iconSize}
            rotate={updateStorage?.iconRotate}
            />
          }
            
        </div>
      </div>
    </div>
  )
}

export default LogoPreview
