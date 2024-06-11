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
          <a href="http://www.linkedin.com/in/prathamesh-pichkate1208"><LinkedInIcon fontSize="small" /></a>
          <a href="https://wa.me/qr/AE4TWB43BQXVA1"><WhatsAppIcon fontSize="small" /></a>
          <a href="https://www.instagram.com/prathameshpic?igsh=MW82dnBweXVzZHlrcQ=="><InstagramIcon fontSize="small" /></a>
          <a href="https://twitter.com/Prathamesh_p128"><XIcon fontSize="small" /></a>
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
