import React, { useContext, useEffect, useState } from 'react'
import { Slider } from './ui/slider'
import ColorPickerController from './ColorPickerController'

function BackgroundController({updateStorage, setUpdateStorage}) {

  const [rounded, setRounded]=useState(updateStorage?.bgRounded ? updateStorage?.bgRounded : 0)
  const [padding, setPadding]=useState(updateStorage?.bgPadding ? updateStorage?.bgPadding : 0)
  const [color, setColor]=useState(updateStorage?.bgColor ? updateStorage?.bgColor : '#000')

  useEffect(()=>{
      const updateValue={
      ...updateStorage,
      bgRounded:rounded,
      bgPadding:padding,
      bgColor:color,
    }
    setUpdateStorage(updateValue);
  }, [rounded, padding, color]);
  return (
    <div>
       <div className='py-2'>
            <label className='p-2 flex justify-between items-center'>Rounded <span>{rounded} px</span> </label>
            <Slider defaultValue={[0]} max={512} step={1} 
                onValueChange={(event)=>setRounded(event[0])}
            />
        </div>

        <div className='py-2'>
            <label className='p-2 flex justify-between items-center'>Padding <span>{padding} px</span> </label>
            <Slider defaultValue={[40]} max={100} step={1} 
                onValueChange={(event)=>setPadding(event[0])}
            />
        </div>

        <div className='py-2'>
            <label className='p-2 flex justify-between items-center'>Background Color </label>
            <ColorPickerController hideController={false}
            selectedColor={(color)=>setColor(color)}
            colorName={color}
            />
        </div>
    </div>
  )
}

export default BackgroundController
