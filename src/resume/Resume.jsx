import React from 'react';
import { Button, Link, Typography } from '@mui/material';
import pdf from '../pdf/resume.pdf'; // Make sure to adjust the path to your actual resume PDF

function Resume() {
  return (
    <>
      <div className="My_resume">
        <div    
        data-aos='fade-zoom-in'
        data-aos-duration='1000'>
          <Typography className="text_co text-center">1+ YEARS OF EXPERIENCE</Typography>
          <Typography variant="h2" sx={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>
            My Resume
          </Typography>
          <Typography className="text-center">
            <Link top={'/resume'} href={pdf} download="Vikash Resume.pdf">
              <Button  variant="contained" className="text-center mt-5 mb-5 ">Download Resume</Button>
            </Link>
          </Typography>
        </div>
      </div>
    </>
  );
}

export default Resume;
