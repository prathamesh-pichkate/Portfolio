import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

function Footer() {

  return (
   <div className='flex flex-row'>
     <div className='w-full h-auto flex flex-col gap-4 items-center py-4 bg-[#ededed] text-grey-500'>
      <div className='flex flex-col items-center'>
        <h1 className='text-2xl font-bold'>Prathamesh Pichkate</h1>
        <div className='flex flex-row gap-2 '>
          <a href={process.env.REACT_APP_LinkedInLink}><LinkedInIcon fontSize="small" /></a>
          <a href={process.env.REACT_APP_Whatapp}><WhatsAppIcon fontSize="small" /></a>
          <a href={process.env.REACT_APP_Instagram}><InstagramIcon fontSize="small" /></a>
          <a href={process.env.REACT_APP_Twitter}><XIcon fontSize="small" /></a>
        </div>
      </div>
      <div className='text-center'>
        <p className='text-[.8rem]'>&copy; 2024 All Rights Reserved</p>
      </div>
    </div>
   </div>
  )
}

export default Footer
