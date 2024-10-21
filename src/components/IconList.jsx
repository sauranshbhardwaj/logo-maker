import React, { useState } from 'react'
import { icons, Smile } from 'lucide-react'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { iconList } from '@/constants/icons';

function IconList({selectedIcon, updateStorage, setUpdateStorage}) {
    const [openDialog,setOpenDialog]=useState(false);
    const [icon,setIcon]=useState(updateStorage?.icon ? updateStorage?.icon : 'Smile');

    const Icon=({name,color,size}) => {
        const LucidIcon = icons[name];
        if (!LucidIcon) return;

        return <LucidIcon color={color} size={size}
        />
    }

  return (
    <div>
        <div>
            <label>Icon</label>
                <div 
                onClick={()=>setOpenDialog(true)}
                className='p-3 cursor-pointer bg-gray-200 rounded-md w-[50px] h-[50px] my-2 flex items-center justify-center'>
                    <Icon name={icon} color={'#000'} size={20}/>
                </div>
        </div>
      <Dialog open={openDialog}>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>Pick Your Favorite Icon</DialogTitle>
            <DialogDescription>
                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 overflow-auto h-[400px] p-6'>
                    {iconList.map((icon,index)=>(
                        <div className='border p-3 flex rounded-sm items-center justify-center cursor-pointer'
                        onClick={()=>{selectedIcon(icon);setOpenDialog(false);
                        setIcon(icon)
                        }} key = {index}
                        >
                            <Icon name={icon} color={'#000'} size={20}/>
                        </div>
                    ))}
                </div>
            </DialogDescription>
            </DialogHeader>
        </DialogContent>
        </Dialog>

    </div>
  )
}

export default IconList
