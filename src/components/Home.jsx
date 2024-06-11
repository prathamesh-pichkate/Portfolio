import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';


function Home() {
    const iconStyle = {
        color: '#C7B7A3', 
        fontSize: 30, 
        margin: '0 10px',
        cursor: 'pointer',
    };

    const dmSerifTextRegular = {
        fontFamily: "'DM Serif Text', serif",
        fontWeight: 400,
        fontStyle: 'normal',
    };

    const textZoom = {
        padding: "20px",
        transition: "transform 0.2s, color 0.2s",
    };

    return (    
        <>
            <style>
                {`
                .textZoom:hover {
                    color: #A3D8FF;
                    transform: scale(1.2);
                }
                `}
            </style>
            <div 
                className='w-full h-[30rem] flex justify-center items-center bg-cover bg-center'
                style={{ 
                    backgroundImage: "url('1.jpg')", 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center',
                    boxShadow:"0 0 20px",
                }}
            >
                <div className='w-9/12 h-3/4 flex flex-col justify-center items-center text-teal-50'>
                    <h1 
                        className='text-5xl font-bold p-4 textZoom' 
                        style={{...dmSerifTextRegular, ...textZoom}} 
                    >
                        I'm Prathamesh Pichkate
                    </h1>
                    <p style={{fontSize:"1rem",fontFamily:"cursive"}}>
                        Full Stack Web Developer
                    </p>

                    <div className='flex flex-row mt-4'>
                        <a href="http://www.linkedin.com/in/prathamesh-pichkate1208" className="iconStyle"><LinkedInIcon style={iconStyle} /></a>
                        <a href="https://wa.me/qr/AE4TWB43BQXVA1" className="iconStyle"><WhatsAppIcon style={iconStyle} /></a>
                        <a href="https://www.instagram.com/prathameshpic?igsh=MW82dnBweXVzZHlrcQ==" className="iconStyle"><InstagramIcon style={iconStyle} /></a>
                        <a href="https://twitter.com/Prathamesh_p128" className="iconStyle"><XIcon style={iconStyle} /></a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
