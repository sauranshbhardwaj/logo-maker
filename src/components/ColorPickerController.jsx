import React, { useState } from 'react'
import ColorPicker from 'react-best-gradient-color-picker'

function ColorPickerController({hideController=false,selectedColor,colorName}) {
    const [color,setColor]=useState(colorName);

  return (
    <div>
      <ColorPicker value={color} 
      onChange={(e)=>{setColor(e);selectedColor(e)}} 
      hideControls={hideController}
      hideEyeDrop hideAdvancedSliders hideColorGuide hideInputType
      />
    </div>
  )
}

export default ColorPickerController
