import { Smile } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import { Slider } from "@/components/ui/slider"
import ColorPickerController from './ColorPickerController';
import { UpdateStorageContext } from '@/context/UpdateStorageContext';
import IconList from './IconList';

function IconController({updateStorage, setUpdateStorage}) {
    const [size, setSize]=useState(updateStorage?.iconSize ? updateStorage?.iconSize : 280);
    const [rotate, setRotate]=useState(updateStorage?.iconRotate ? updateStorage?.iconRotate : 0);
    const [color, setColor]=useState(updateStorage?.iconColor ? updateStorage?.iconColor : '#fff');
    const [icon,setIcon]=useState(updateStorage?.icon ? updateStorage?.icon : 'Smile');


    useEffect(()=>{
        let updatedValue = {
            ...updateStorage,
            iconSize:size,
            iconRotate:rotate,
            iconColor:color,
            icon:icon,
        }
        setUpdateStorage(updatedValue);
    },[size, rotate, color, icon]);

  return (
    <div>
      <div>
        <IconList selectedIcon={(icon)=>setIcon(icon)} updateStorage={updateStorage} setUpdateStorage={setUpdateStorage}/>
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
