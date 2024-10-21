import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import Header from './components/Header'
import SideNav from './components/SideNav'
import IconController from './components/IconController'
import BackgroundController from './components/BackgroundController'
import LogoPreview from './components/LogoPreview'
import { UpdateStorageContext } from './context/UpdateStorageContext'

function App() {
  const [selectedIndex, setSelectedIndex]=useState(0);
  const [updateStorage,setUpdateStorage]=useState(JSON.parse(localStorage.getItem('value')));

  const [downloadIcon,setDownloadIcon]=useState();

    useEffect(() => {
        localStorage.setItem('value', JSON.stringify(updateStorage))
    }, [updateStorage]);

  return (
      <div>
        <Header DownloadIcon={setDownloadIcon}/>
        <div className='w-64 fixed'>
          <SideNav selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        </div>
        <div className='ml-64 grid grid-cols-1 md:grid-cols-6'>
          <div className='md:col-span-2 border h-screen shadow-sm p-5 overflow-auto'>
            {selectedIndex === 0 ?
              <IconController updateStorage={updateStorage} setUpdateStorage={setUpdateStorage}/>:
              <BackgroundController updateStorage={updateStorage} setUpdateStorage={setUpdateStorage}/>
            }
          </div>
          <div className='md:col-span-3'><LogoPreview updateStorage={updateStorage} downloadIcon={downloadIcon}/></div>
          <div className='md:col-span-1'>Ads Banner</div>
        </div>
      </div>
  )
}

export default App
