import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import '../styles/SignUpCard.css'
import { useState } from 'react';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const theme = createTheme();

export default function SignUp() {
    const [name, setName] = useState("")
    const [lastname, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };
    function checkemail(input) {
        let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        // this regular expression matching will see the correctness of email 
        if (input.match(regExp))
            return true
        else
            return false;
    }
    const handleclick = (event) => {
        event.preventDefault()
        if (checkemail(email))
            alert(`Welcome ${name} ${lastname}`)
        else
            alert(`Enter a valid email id`);
    }


    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 12,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        borderRadius: '10px',
                        border: '1px solid black',
                        paddingLeft: '50px',
                        paddingRight: '50px',
                        paddingBottom: '80px'
                    }}
                >
                    <Box component="form" Validate sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    onChange={e => setName(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    onChange={e => setLastName(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField

                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField

                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </Grid>
                            <div style={{ display: 'flex', paddingLeft: '5%' }}>
                                <Checkbox {...label} defaultChecked size="medium" sx={{
                                    color: "rgb(76,21,246)", '&.Mui-checked': {
                                        color: "rgb(76,21,246)",
                                    },
                                }} />
                                <Grid item xs={18}>
                                    <p style={{ color: "rgb(79, 79, 79)", fontSize: "17px" }}> <b>Subscribe to our Newsletter</b></p>
                                </Grid>
                            </div>

                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 0, mb: 1 }}
                            style={{ background: "rgb(76,21,246)" }}
                            onClick={handleclick}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">

                            <Grid item xs={12}
                                sx={{ ml: 11, mb: 4 }}
                            >
                                <h4 style={{ color: "rgb(79, 79, 79)" }}>or sign up with:</h4>
                            </Grid>
                        </Grid>

                    </Box>
                    <div style={{ display: 'flex' }}>
                        <Grid item xs={12}
                            sx={{ ml: 1 }}
                        >
                            <img src="/assets/facebook.png" alt="" />
                        </Grid>
                        <Grid item xs={12}
                            sx={{ ml: 5 }}
                        >
                            <img src="/assets/google.png" alt="" />
                        </Grid>
                        <Grid item xs={12}
                            sx={{ ml: 5 }}
                        >
                            <img src="/assets/github.png" alt="" />
                        </Grid>
                        <Grid item xs={12}
                            sx={{ ml: 5 }}
                        >
                            <img src="/assets/twitter.png" alt="" />
                        </Grid>
                    </div>





                </Box>

            </Container>
        </ThemeProvider>
    );
}