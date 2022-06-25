import React from 'react'
import '../styles/Signup.css'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
function SignupText() {
    const theme = createTheme();
    return (
        <div className='Signup'>
            <div className='text-heading'>
                <h3>The best offer</h3> <div className='text-heading-subtext'> <h3>for your business</h3> </div>
                <p className='text-content'>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod tempor incididunt  ut labore <br /> et dolore magna aliqua. Ut enim ad minim veniam <br />quis nostrud exercitation ullamco laboris nisi ut <br /> aliquip ex ea commodo consequat.</p>
            </div>
            <div className='card'>

            </div>
        </div>
    )
}

export default SignupText