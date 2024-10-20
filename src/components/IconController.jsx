import { Smile } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import { Slider } from "@/components/ui/slider"
import ColorPickerController from './ColorPickerController';
import { UpdateStorageContext } from '@/context/UpdateStorageContext';

function IconController({updateStorage, setUpdateStorage}) {
    const [size, setSize]=useState(updateStorage?.iconSize ? updateStorage?.iconSize : 280);
    const [rotate, setRotate]=useState(updateStorage?.iconRotate ? updateStorage?.iconRotate : 0);
    const [color, setColor]=useState(updateStorage?.iconColor ? updateStorage?.iconColor : '#fff');


    useEffect(()=>{
        let updatedValue = {
            ...updateStorage,
            iconSize:size,
            iconRotate:rotate,
            iconColor:color,
            icon:'Smile',
        }
        setUpdateStorage(updatedValue);
    },[size, rotate, color]);

  return (
    <div>
      <div>
        <label>Icon</label>
        <div className='p-3 cursor-pointer bg-gray-200 rounded-md w-[50px] h-[50px] my-2 flex items-center justify-center'>
            <Smile/>
        </div>
        <div className='py-2'>
            <label className='p-2 flex justify-between items-center'>Size <span>{size} px</span> </label>
            <Slider defaultValue={[size]} max={512} step={1} 
                onValueChange={(event)=>setSize(event[0])}
            />
        </div>

        <div className='py-2'>
            <label className='p-2 flex justify-between items-center'>Rotate <span>{rotate} °</span> </label>
            <Slider defaultValue={[rotate]} max={360} step={1} 
                onValueChange={(event)=>setRotate(event[0])}
            />
        </div>

        <div className='py-2'>
            <label className='p-2 flex justify-between items-center'>Icon Color </label>
            <ColorPickerController hideController={true}
            selectedColor={(color)=>setColor(color)}
            colorName={color}
            />
        </div>
      </div>
    </div>
  )
}

export default IconController
